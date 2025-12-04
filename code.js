//----difference between var vs (const and let)---//

function someFun(){
  if(true){
    var game = "bedam"
  }
  if(true){
    let name = "vedam"
  }
  
  if(true){
    const fame = "actor"
  }
  console.log(game,name);
  console.log(fame);
}

someFun()