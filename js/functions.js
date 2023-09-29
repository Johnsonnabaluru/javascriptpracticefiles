function greet() {
    console.log("hello"); //normal function 
}
greet();

let a=function (params) {
    console.log("anonymous");
    
}
a();
console.log(a);
a=10;
console.log(a);
 
let b=function (c,d) {
    console.log(c+d);
    
}

b(10,20)

function add(a,b,c=0) {
    console.log(a+b+c); //Reinitializtion 
    
}
add(10,20,50);

let person={
    name:"poojith",
    id:223,
    skils:["html","css","sql"],
    greet:function (params) {
        console.log("hello");
        
    }
}
console.log(person.greet);
console.log(person.greet())