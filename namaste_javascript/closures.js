function outer(){
    const inner=()=>{
        console.log(a);
    }
    const a = 'mani';
    return inner
}
outer()()
// function xyz() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i)
//   }
//   console.log("namste js");
// }
// xyz();

// function xy() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("namste js");
// }
// xy();

// function xy (){
//     var i=1;
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     i=i+4
//     console.log('namste js')
// }
// xy()

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// const z = x();
// console.log(z())
