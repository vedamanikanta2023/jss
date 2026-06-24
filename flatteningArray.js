const a = [1,2,3,[4,[5,6]],7,8];

function flattening(arr,depth=1){
    let flatArr=[]
    arr.forEach(item=>{
        // console.log(typeof item,item)
        if(typeof item==='object'){
            flatArr=[...flatArr,...flattening(item)];
            console.log(flatArr,flattening(item),'aftr..concat');
        }else{
            flatArr.push(item);
        }
    })
    return flatArr;
}

const flatArr = flattening(a)
console.log(flatArr,'flatArray');