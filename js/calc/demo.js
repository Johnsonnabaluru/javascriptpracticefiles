// function a() {
//     var x=20;
//     console.log(y);
//     c()
//     function c() {
//         console.log(x);
//         console.log(b);
//     }
// }
// let b=10;
// a();
// var y=30;
// console.log(x);
// let j=a
// console.log(j);
// console.log(x);


// function person(){
//     let age=21;
//     function addAge(){
//     return age
//     }
//     return addAge;
//     }
//     let add=person();
//     console.log(add());

// function x() {
//     a=10
//     function y() {
//         console.log(a);
//     }
//     return y
// }
// x();
// let z=x();
// z();




//hoisting

// let m=10;
// document.write(m);
// window.alert(a)


// function outer() {
//     var a=10;
//     // console.log(a);
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// // outer()();
// let z=outer()
// z();





//constructer function

// let count=0;

// class Counter {
//     constructor() {
//         this.incrementCounter = function () {
//             count++;
//             console.log(count);
//         };
//         this.decrementCounter = function () {
//             count--;
//             console.log(count);
//         };
//     }
// }

// let fun1=new Counter()
// fun1.incrementCounter()

// // let fun2= new Counter()
// fun1.decrementCounter();

// const arr=["john",23,"panda"]
// const[fname,age,sname]=arr;       // array destructing method
// console.log(fname,age,sname); //"john",23,"panda"

// let person={
//     firstname:"john",
//     lastname:"son"
// };
// let {firstname:fname,lastname:lname}=person;   //object distructing
// console.log(fname,lname);


let arr=[10,20,30,40,50,60]

let values=arr.map((x)=>{
        x%2==0
        return x
})


