// promise.all
//promise //all

function showText(text,time=100){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(text)
        },time)
    })
}

function myPromiseAll(promises) {
    let result = [];
    let completed = 0;   // add this

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise
                .then((res) => {
                    result[index] = res; // change push to index assignment

                    completed++;         // increment count

                    if (completed === promises.length) {
                        resolve(result);
                    }
                })
                .catch((er) => reject(er));
        });
    });
}

myPromiseAll([showText('Hello Mani'),Promise.resolve('vedam'),Promise.resolve("rejecting")])
.then(value=>console.log(value))
.catch(er=>console.log(er,'catch bloack'))