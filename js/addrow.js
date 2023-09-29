// let table = document.getElementById("myTable");
// function x() {
//         let newRow = table.insertRow();
//         let cell1 = newRow.insertCell(0);
//         cell1.innerHTML = prompt("enter the SRNo");

//         let cell2 = newRow.insertCell(1);
//         cell2.innerHTML = prompt("enter the I Period");


//         let cell3 = newRow.insertCell(2);
//         cell3.innerHTML =prompt("enter the II Period");

// }

// let table =document.querySelector("table");

// let container=document.querySelector("section")

// function x(){

//         let tr1=document.createElement("tr")

//         table.appendChild(tr1)

//         let td1=document.createElement("td")
//         let td2=document.createElement("td")
//         let td3=document.createElement("td")
//         let td4=document.createElement("td")


//         let data1=prompt("enter WeekDay")
//         let data2=prompt("enter period 1")
//         let data3=prompt("enter period 2")
//         let data4=prompt("enter period 3")

//         td1.innerText=data1
//         td2.innerText=data2
//         td3.innerText=data3
//         td4.innerText=data4
        

//         tr1.appendChild(td1)
//         tr1.appendChild(td1)
//         tr1.appendChild(td2)
//         tr1.appendChild(td3)
//         tr1.appendChild(td4)

  
      
// }
 let names=document.querySelector("h1")

var a;
let b;
let c;
let d;
let e;

function start() {
       a= setInterval(() => {
                document.body.style.backgroundColor="darkorange"
                names.innerText="16"
        }, 500);

        
       b= setInterval(() => {
                document.body.style.background="aqua"
                names.innerText="luck"
        }, 600);
        
        
         c= setInterval(() => {
                document.body.style.background="deeppink"
                names.innerText="kick"
        }, 700);
        d= setInterval(() => {
                document.body.style.background="lightblue"
                names.innerText="adiyee"
        }, 800);

        d= setInterval(() => {
                document.body.style.background="green"
                names.innerText="kotha"
        }, 900);
}


function pausee() {
       clearInterval(a)
       clearInterval(b)
       clearInterval(c)
       clearInterval(d)
       clearInterval(e)
      

}
console.log(this.a);


