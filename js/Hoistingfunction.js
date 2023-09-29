greet();
function greet(params) {
    console.log("hii good morning"); //function Hoisting
    
}



let x=function(params) {
    console.log("hello");
}
console.log(x);
x();
x=20;
console.log(x);