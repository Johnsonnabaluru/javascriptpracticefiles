console.log("hello");
function x() {
    let a=10;
    function y() {
        return a;
    }
    return y;
}
let z=x();
// console.log(z);
let p=z();
console.log(p);