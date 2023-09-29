let divs=document.createElement("div")
document.body.append(divs)
divs.style.justifyContent="center"
divs.style.alignItems="center"
console.log(divs);
let heading=document.createElement("h1")

heading.innerHTML="Time Table";
divs.appendChild(heading)
// document.body.append(heading)

let tables=document.createElement("table")
divs.appendChild(tables)
// document.body.append(tables)
tables.border=3;
tables.style.border="2px solid red "
tables.style.background="pink"
tables.style.color="brown"
let row1=document.createElement("tr")
tables.appendChild(row1)


let r1c1=document.createElement("th")
let r1c2=document.createElement("th")
let r1c3=document.createElement("th")
let r1c4=document.createElement("th")
let r1c5=document.createElement("th")
let r1c6=document.createElement("th")
let r1c7=document.createElement("th")
let r1c8=document.createElement("th")
let r1c9=document.createElement("th")


row1.appendChild(r1c1)
row1.appendChild(r1c2)
row1.appendChild(r1c3)
row1.appendChild(r1c4)
row1.appendChild(r1c5)
row1.appendChild(r1c6)
row1.appendChild(r1c7)
row1.appendChild(r1c8)
row1.appendChild(r1c9)





r1c1.innerHTML="DAYS&TIME"
r1c2.innerHTML="I<br>9:30-10:20"
r1c3.innerHTML="10:20-11:10"
r1c4.innerHTML="11:10-12:00"
r1c5.innerHTML="12:00-12-40"
r1c6.innerHTML="12:40-1:30"
r1c7.innerHTML="1:30-2:20"
r1c8.innerHTML="2:20-3:10"
r1c9.innerHTML="3:10-4:00"

let row2=document.createElement("tr")
tables.appendChild(row2)



let r2c1=document.createElement("th")
let r2c2=document.createElement("td")
let r2c3=document.createElement("td")
let r2c4=document.createElement("td")
let r2c5=document.createElement("th")
let r2c6=document.createElement("td")
let r2c7=document.createElement("td")
let r2c8=document.createElement("td")
let r2c9=document.createElement("td")


row2.appendChild(r2c1)
row2.appendChild(r2c2)
row2.appendChild(r2c3)
row2.appendChild(r2c4)
row2.appendChild(r2c5)
row2.appendChild(r2c6)
// row2.appendChild(r2c7)
// row2.appendChild(r2c8)
row2.appendChild(r2c9)



r2c1.innerHTML="Monday"
r2c2.innerHTML="ENG"
r2c3.innerHTML="MAT"
r2c4.innerHTML="CHE"
r2c5.innerHTML="L<br>U<br>N<br>C<br>H"
r2c5.rowSpan=6
r2c6.innerHTML="<center>LAB</center>"
r2c6.colSpan="3"
r2c7.innerHTML=""
r2c8.innerHTML=""
r2c9.innerHTML="PHY"


let row3=document.createElement("tr")
tables.appendChild(row3)


let r3c1=document.createElement("th")
let r3c2=document.createElement("td")
let r3c3=document.createElement("td")
let r3c4=document.createElement("td")
let r3c5=document.createElement("td")
let r3c6=document.createElement("td")
let r3c7=document.createElement("td")
let r3c8=document.createElement("td")
let r3c9=document.createElement("td")


row3.appendChild(r3c1)
row3.appendChild(r3c2)
// row3.appendChild(r3c3)
// row3.appendChild(r3c4)
// row3.appendChild(r3c5)

row3.appendChild(r3c6)
row3.appendChild(r3c7)
row3.appendChild(r3c8)
row3.appendChild(r3c9)




r3c1.innerHTML="Tuesday"
r3c2.innerHTML="<center>LAB</center>"
r3c2.colSpan=3
r3c3.innerHTML=""
r3c4.innerHTML=""
r3c5.innerHTML=""
r3c6.innerHTML="ENG"
r3c7.innerHTML="CHE"
r3c8.innerHTML="MATH"
r3c9.innerHTML="SPORTS"



let row4=document.createElement("tr")
tables.appendChild(row4)


let r4c1=document.createElement("th")
let r4c2=document.createElement("td")
let r4c3=document.createElement("td")
let r4c4=document.createElement("td")
let r4c5=document.createElement("td")
let r4c6=document.createElement("td")
let r4c7=document.createElement("td")
let r4c8=document.createElement("td")
let r4c9=document.createElement("td")



row4.appendChild(r4c1)
row4.appendChild(r4c2)
row4.appendChild(r4c3)
row4.appendChild(r4c4)
// row4.appendChild(r4c5)
row4.appendChild(r4c6)
row4.appendChild(r4c7)
// row4.appendChild(r4c8)
// row4.appendChild(r4c9)


r4c1.innerHTML="Wednesday"
r4c2.innerHTML="MATH"
r4c3.innerHTML="PHY"
r4c4.innerHTML="ENG"
r4c5.innerHTML=""
r4c6.innerHTML="CHE"
r4c7.innerHTML="<center>LIBRARY</center>"
r4c7.colSpan=3
r4c8.innerHTML=""
r4c9.innerHTML=""


let row5=document.createElement("tr")
tables.appendChild(row5)


let r5c1=document.createElement("th")
let r5c2=document.createElement("td")
let r5c3=document.createElement("td")
let r5c4=document.createElement("td")
let r5c5=document.createElement("td")
let r5c6=document.createElement("td")
let r5c7=document.createElement("td")
let r5c8=document.createElement("td")
let r5c9=document.createElement("td")


row5.appendChild(r5c1)
row5.appendChild(r5c2)
row5.appendChild(r5c3)
row5.appendChild(r5c4)
// row5.appendChild(r5c5)
row5.appendChild(r5c6)
// row5.appendChild(r5c7)
// row5.appendChild(r5c8)
row5.appendChild(r5c9)


r5c1.innerHTML="Thursday"
r5c2.innerHTML="PHY"
r5c3.innerHTML="ENG"
r5c4.innerHTML="CHE"
r5c5.innerHTML=""
r5c6.innerHTML="<center>LAB</center>"
r5c6.colSpan=3
r5c7.innerHTML=""
r5c8.innerHTML=""
r5c9.innerHTML="MATH"


let row6=document.createElement("tr")
tables.appendChild(row6)


let r6c1=document.createElement("th")
let r6c2=document.createElement("td")
let r6c3=document.createElement("td")
let r6c4=document.createElement("td")
let r6c5=document.createElement("td")
let r6c6=document.createElement("td")
let r6c7=document.createElement("td")
let r6c8=document.createElement("td")
let r6c9=document.createElement("td")


row6.appendChild(r6c1)
row6.appendChild(r6c2)
// row6.appendChild(r6c3)
// row6.appendChild(r6c4)
// row6.appendChild(r6c5)
row6.appendChild(r6c6)
row6.appendChild(r6c7)
row6.appendChild(r6c8)
row6.appendChild(r6c9)


r6c1.innerHTML="Friday"
r6c2.innerHTML="<center>LAB</center>"
r6c2.colSpan=3
r6c3.innerHTML=""
r6c4.innerHTML=""
r6c5.innerHTML=""
r6c6.innerHTML="MATH"
r6c7.innerHTML="CHE"
r6c8.innerHTML="ENG"
r6c9.innerHTML="PHY"


let row7=document.createElement("tr")
tables.appendChild(row7)


let r7c1=document.createElement("th")
let r7c2=document.createElement("td")
let r7c3=document.createElement("td")
let r7c4=document.createElement("td")
let r7c5=document.createElement("td")
let r7c6=document.createElement("td")
let r7c7=document.createElement("td")
let r7c8=document.createElement("td")
let r7c9=document.createElement("td")


row7.appendChild(r7c1)
row7.appendChild(r7c2)
row7.appendChild(r7c3)
row7.appendChild(r7c4)
// row7.appendChild(r7c5)
row7.appendChild(r7c6)
// row7.appendChild(r7c7)
// row7.appendChild(r7c8)
row7.appendChild(r7c9)


r7c1.innerHTML="Saturday"
r7c2.innerHTML="ENG"
r7c3.innerHTML="CHE"
r7c4.innerHTML="MATH"
r7c5.innerHTML=""
r7c6.innerHTML="<center>SEMINAR</center>"
r7c6.colSpan=3
r7c7.innerHTML=""
r7c8.innerHTML=""
r7c9.innerHTML="SPORTS"
















