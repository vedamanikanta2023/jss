const check = ()=>{
  throw new Error("Param needed ra yedava");
}
const functionRegistry = new Map();
function mySpecialFunction(name= check()) {
  console.log("This is a special function.", name);
}
functionRegistry.set("uniqueID123", mySpecialFunction);
functionRegistry.set("uniqueID122", ()=>{});

// Retrieve and call the function using your custom ID
functionRegistry.get("uniqueID123")("chekar");
console.log(  functionRegistry)
