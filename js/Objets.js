let person = {
    Id:1,
    name:"mark",
    age:18,
    gender:"male",
}
console.log(person);
person.age = 27;
console.log(person.age);

let person2={
    name:"bob",
    id:1,
    Skills:["html","css","js"],
    address:{
        city:"banglore",
        pincode:560026,
        door:"602/m"
    }

}

console.log(person2);
console.log(person2.Skills.slice(0,2));
console.log(person2.address.pincode);

let person3={
    name:"panda",
    id:123,
    skills:[{name:"html"},{name:"Css"},{name:"JS"}],
    address:{
        city:"banglore",
        pincode:560076
    }
}
console.log(person3.skills[2]);
// console.log(person3.splice);
console.log(person3);

let details=`my name is ${person3.name} and these are technologies I know
1.${person3.skills[0].name}
2.${person3.skills[1].name} 
3.${person3.skills[2].name}
I live in Banglore and area pincode is 573201.`
console.log(details); 