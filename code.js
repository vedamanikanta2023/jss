let nums = [2,5,3,2,6,5,7,1,2];

const objNums = {};

nums.forEach(num=>{
    const objNum = objNums[String(num)]
    if(objNums[String(num)]){
        objNums[String(num)]=objNums[String(num)]+1
    }else{
        objNums[String(num)] =1
    }

});

let firstNonRepetitiveNums = nums.filter(num=>objNums[String(num)]===1);

console.log(firstNonRepetitiveNums[0]);