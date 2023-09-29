function operation(x,z,...y) {  //rest operator is used inside funtion and  used to pack the values..
    console.log(x);
    console.log(z);
    console.log(...y); //spread operator is used anywhere and used to unpack the values..
    
}
operation(10,20,40,30,0,50)