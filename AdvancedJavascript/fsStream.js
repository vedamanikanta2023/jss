const fs = require("fs/promises");
fs.unlink("ex1.txt");

const stream = fs.createReadStream(
  "c:/Users/ADMIN/OneDrive/Desktop/hexaware preparation plan.txt",
);

stream.on("data", (chunk) => {
  console.log(`Received chunk : ${chunk}`);
});

stream.on("end", () => {
  console.log("streaming stopped");
});
