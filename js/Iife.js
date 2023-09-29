// (function x() {
//     console.log("mowa");
// })() //immediate invoke function expression
// (function () {
//     console.log("steephhh");
// })();
x=()=>{
    console.log("steeph");
}
y=()=> console.log("panda");
z=()=> console.log("mahi");
setTimeout(x,6000)
setTimeout(z,4000)
setTimeout(y,2000)
q=()=> document.write("john says ")
r=()=> document.write("panda is BP ")
setInterval(q,2000)
setInterval(r,1999)



