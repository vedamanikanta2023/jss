const users = [
  { name: 'abc', isAdmin: true },
  { name: 'xyz', isAdmin: false },
  { name: 'pqr', isAdmin: true }
];

const grouped = users.reduce((acc,curr)=>{
    const key = curr['isAdmin'] ? 'admins':'non admins'
    console.log(acc,curr,'inn')
    acc[key]=[...(acc[key]||[]),curr]
    return acc
},{})

console.log(grouped,'max')