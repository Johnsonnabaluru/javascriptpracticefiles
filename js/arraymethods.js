let arr=[10,20,30,40]

arr.pop() //deletes last element in an array 
arr.push("mahi") //adds an element in last in an []
console.log(arr); //[10,20,30,"mahi"]

let arr1=[60,70,80,90]
arr1.shift() //deletes first element in an array 
arr1.unshift("mowa",true,"steeph","panda") // adds the element from the first index.
console.log(arr1); //["mowa",true,"steeph","panda",70,80,90]

let a=[10,20,30,40]
let b=[50,60,70,80]
let c=["rohit","poojith","mowa"]

let indexvalue=c.indexOf("mowa") //its gives an index value of an element
console.log(indexvalue); // 2

let d=c.includes("john") //returns boolean value
console.log(d); //false

let mergearr=a.concat(b,d) //it merges the array
console.log(mergearr); //[10, 20, 30, 40, 50, 60, 70, 80, false]
