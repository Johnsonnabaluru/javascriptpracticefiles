let clsname=document.getElementById("b");
let tag=clsname.innerText;
console.log(tag);
clsname.style.background="red"


let arr=document.getElementsByClassName("a")
console.log(arr);


let arr1=Array.from(arr);
console.log(arr1);
let purearr=arr1.forEach((ele)=>{
  ele.style.background="yellow"
})
arr1[1].style.background="blue"
arr1[2].style.background="green"

function x() {
    arr1.style.background="pink"
}