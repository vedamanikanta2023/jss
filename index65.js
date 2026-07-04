async function doTask() {
    const name = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("vedamanikanta");
        }, 100);
    });

    return await name;
}

async function main() {
    const result = await doTask();
    console.log(result);
}

main();

console.log(n);
var n =1;
let k = 2;
const i = 4;