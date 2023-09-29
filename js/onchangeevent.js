
function a() {
    console.log("change value");
    let select=document.querySelector("#a")
    console.log(select.value);
    document.body.style.background=select.value
}