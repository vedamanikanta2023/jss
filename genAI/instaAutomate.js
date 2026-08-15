import 'dotenv/config';
import { GoogleGenAI, Type } from '@google/genai';
import { v2 as cloudinary } from 'cloudinary';

// 1. Initialize Clients
const ai = new GoogleGenAI({});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IG_USER_ID = process.env.IG_USER_ID;
const IG_ACCESS_TOKEN = process.env.IG_ACCESS_TOKEN;
const BASE_IG_URL = 'https://graph.facebook.com/v19.0';



/**
 * 2. Generate Image via Imagen 3 & Upload to Cloudinary for a public URL
 */
async function generateAndUploadImage(imagePrompt) {
  console.log(`🎨 Generating image for prompt: "${imagePrompt.slice(0, 40)}..."`);
  
  // Generate with Imagen 3
  const imageResponse = await ai.models.generateImages({
    model: 'imagen-3.0-generate-002',
    prompt: imagePrompt,
    config: {
      numberOfImages: 1,
      aspectRatio: '1:1', // Instagram feed square ratio (or '4:5')
      outputMimeType: 'image/jpeg'
    }
  });

  const base64Image = imageResponse.generatedImages[0].image.imageBytes;
  const dataUri = `data:image/jpeg;base64,${base64Image}`;

  // Upload to Cloudinary to obtain a public HTTPS URL
  const uploadResult = await cloudinary.uploader.upload(dataUri, {
    folder: 'instagram_news_bot'
  });

  return uploadResult.secure_url;
}

/**
 * 3. Publish to Instagram via Graph API
 */
async function postToInstagram(imageUrl, caption) {
  console.log('📤 Submitting post to Instagram...');

  // Step 3a: Create Media Container
  const containerRes = await fetch(`${BASE_IG_URL}/${IG_USER_ID}/media`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      image_url: imageUrl,
      caption: caption,
      access_token: IG_ACCESS_TOKEN
    })
  });
  const containerData = await containerRes.json();
  if (containerData.error) throw new Error(containerData.error.message);

  // Wait 6 seconds for Instagram servers to process the image container
  await new Promise((res) => setTimeout(res, 6000));

  // Step 3b: Publish Container
  const publishRes = await fetch(`${BASE_IG_URL}/${IG_USER_ID}/media_publish`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      creation_id: containerData.id,
      access_token: IG_ACCESS_TOKEN
    })
  });
  const publishData = await publishRes.json();
  if (publishData.error) throw new Error(publishData.error.message);

  return publishData.id;
}

/**
 * Master Pipeline Runner
 */
async function runDailyNewsWorkflow() {
  try {
    const stories = await fetchTrendingStories();
    console.log(`Found ${stories.length} stories. Processing one by one...`);

    for (let i = 0; i < stories.length; i++) {
      const story = stories[i];
      console.log(`\n--- Processing Story ${i + 1}/${stories.length}: ${story.headline} ---`);

      // 1. Generate Image and get Public URL
      const publicImageUrl = await generateAndUploadImage(story.imagePrompt);

      // 2. Post to Instagram
      const postId = await postToInstagram(publicImageUrl, story.caption);
      console.log(`✅ Successfully published Post #${i + 1}! IG Post ID: ${postId}`);

      // Spacing out posts by 1-2 minutes to avoid hitting Instagram rapid-posting rate limits
      if (i < stories.length - 1) {
        console.log('⏳ Waiting 60s before posting next story...');
        await new Promise((res) => setTimeout(res, 60000));
      }
    }

    console.log('\n🎉 All 5 daily stories published successfully!');
  } catch (error) {
    console.error('❌ Pipeline Error:', error);
  }
}

// Option A: Test immediately
runDailyNewsWorkflow();

// Option B: Schedule to run every day at 8:00 AM
// cron.schedule('0 8 * * *', () => {
//   console.log('⏰ Starting scheduled daily Instagram news workflow...');
//   runDailyNewsWorkflow();
// });