let a="hello"
function x() {
    let a="hi"
    console.log(a);
    a=10
    console.log(a);
}
function y(){
    let b=20
    console.log(a);
    a=30
    console.log(a);
}
console.log(a);
y()
console.log(a);
x()
console.log(a);