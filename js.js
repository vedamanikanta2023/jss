let employee = {
    eid: "E102",
    ename: "Veda",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);