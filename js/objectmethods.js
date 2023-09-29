
let person={
    name:"john",
    id:27,
    company:"zoho",
    salary:50000
}

let keyValues=Object.keys(person)
console.log(keyValues);

let values=Object.values(person) 
console.log(values);

let x=Object.entries(person)
console.log(x);

console.log(x[1][0]);