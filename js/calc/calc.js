let userinput=document.querySelector("input")
let expression=""

function calc(num) {
    expression=expression+num
    userinput.value=expression
    console.log(expression);
}
function equl() {
    userinput.value=eval(expression)
    expression=""
}
function erase() {
    expression=""
    userinput.value=expression
}