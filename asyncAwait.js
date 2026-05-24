const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej(JSON.stringify({name:'vedamanikanta',age:25}))
    },4000)
})

async function doSomething(){
    try{
    const result = await promise;
    const parsed =  JSON.parse(result);
    console.log('result',parsed)
        
    }catch(error){
        console.error(new Error(error))
        throw new Error('thrown error')
    }
}

doSomething()