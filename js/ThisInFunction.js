// var a=10;
// var a1="Hi ra Window"

// function x() {
//     var a=30;
//     // console.log(window.a1);      //window refers to window object
//     console.log("-------------------");
//     // console.log(this);       ////this refers to window object
//     console.log(a);             // a refers to local scope variable
//     console.log(this.a);
// }
// x()

// console.log(window); 
// console.log(this); 
var b=10;
function y() {
    var b=30
    function z(params) {
        var b=20
        console.log(b);
        console.log(this.b);
        console.log(y.b);
    }
    z()
    
}
y()