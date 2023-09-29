// let contents=document.getElementById("contents")
let btn=document.getElementsByTagName("button")
// function v(params) {
//     contents.innerText="violet"
//     document.body.style.background="violet";
// }
// function i(params) {

//     contents.innerText="indigo"
//     document.body.style.background="indigo";
// }
// function b(params) {
//     contents.innerText="blue"
//     document.body.style.background="blue";
// }
// function g(params) {
//     contents.innerText="green"
//     document.body.style.background="green";
// }
// function y(params) {
//     contents.innerText="yellow"
//     document.body.style.background="yellow";
// } 
// function o(params) {
//     contents.innerText="orange"
//     document.body.style.background="orange";
// }
// function r(params) {
//     contents.innerText="red"
//     document.body.style.background="red";
// }

// btn[0].addEventListener("click",()=>{
//     document.body.style.background="pink"
// })

// btn[0].addEventListener("mouseout",()=>{
//     document.body.style.background="lightblue"
// })

let divs=document.querySelectorAll("div")

divs.forEach((x)=>{
    x.addEventListener("mouseover",()=>{
        x.style.background=x.innerText
    })

    x.addEventListener("mouseout",()=>{
        x.style.background="white"
    })

    
})


