const EventEmitter = require('events');

const user =  new EventEmitter();

user.on('login',(username)=>{
    console.log(`${username} is logged in`);
})

user.on('logout',(username)=>{
    console.log(`${username[1]} is logged out`);
})

user.emit('login',['Alice','vedam'])