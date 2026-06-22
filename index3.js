const data = false;

const data1 = new Boolean(false);

if (data) {
  console.log("first");
}

if (data1) {
  console.log("second", data1);
}

function aa() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);

    // function c(i){
    // setTimeout(() => {
    //         console.log(i);
    //       }, 1000);
    // }
    // c(i);
  }
}

aa();
