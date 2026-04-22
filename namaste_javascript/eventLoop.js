console.log('start')
document.getElementById('btn')
.addEventListener('click',function cbT(){
    console.log('Callback')
})

fetch('https://api.netflix.com')
.then(function cbF(){
    console.log('CB Netflix');
})
.catch(e=>{console.log(e)})
console.log('start')