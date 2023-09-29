function x() {
  event.preventDefault();
  alert("button clicked")
  let name = document.getElementById("input1").value;
  let phone = document.getElementById("input2").value;
  // let email = document.getElementById("input3").value;
  // let address = document.getElementById("input4").value;

  if (name.length < 4){
    alert("Name should contain minimum 4 letters");
    console.log("Name should contain minimum 4 letters");
  }
  if (phone.length != 10){
    alert("Invalid phone number");
  }

  console.log("Name: " + name);
  console.log("Phone: " + phone);
  console.log("Email: " + email);
  console.log("Address: " + address);
}
