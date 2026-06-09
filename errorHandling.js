// if (true{//syntax error
//     'alskdfj'
// }

let home ={
    name:'sr nilanam',
    owner:"vedamanikanta"
}

let age  =home.owner.name

try{
if(true){
    throw new Error('Throwing Error')
}
}catch(e){
    console.error('Catched eror :',e.message)
}finally{
    console.log('ran finally block code')
}

try{
    throw new Error('em le lasjfdkladsj')
}finally{
    console.info('finally will always run..!')
}