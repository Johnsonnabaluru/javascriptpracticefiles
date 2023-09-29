function operation(a,b,task) {
    let z=task(a,b);
    console.log(z);
    
}
operation(10,20,function (x,y){return x+y})
operation(5,5,function (x,y){return x*y})
operation(4,3,(x,y)=>x-y)

console.log("------------------------------------");

function operation1(a,b,task) {
    console.log(a);
    console.log(b);
    return "hi"
    console.log(task(x,y));
    
}
operation1(10,20,(x,y)=>x+y)