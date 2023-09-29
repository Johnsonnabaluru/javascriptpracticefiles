

let books=[{name:"maths",author:"ABC",price:200},
           {name:"history",author:"xyz",price:300},
            {name:"HTML",author:"tim-berner",price:400},
            {name:"css",author:"lee",price:500},
            {name:"js",author:"gggg ",price:450} ]

let f=books.filter((books)=>{
 return books.price<400
})
console.log(f);

let gst=f.map((y)=>{
    y.price +=y.price/10
    return y
})
console.log(gst);
let sum=gst.reduce((acc,cv)=>{
    return acc+cv.price
},0)
console.log(sum);



