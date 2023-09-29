let person={
    name:"mahi",
    id:999,
    greet: function () {
        console.log(this.id);
        console.log(this.name);
        // console.log(this.greet);
    }(),
    // address:{
    //     pincode:function () {
    //         console.log(this);
    //     }(),
    //     area:573201
    // }
}
console.log(person.greet);


