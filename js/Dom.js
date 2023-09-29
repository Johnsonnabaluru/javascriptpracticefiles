let heading1=document.getElementById("a")
        let content = heading1.innerText
       
        console.log(heading1);
        console.log(content);

        let heading2=document.getElementById("b")
        let content1=heading2.innerText
        console.log(heading2); 
        console.log(content1);



        function greet() {
            heading1.style.backgroundColor="lightskyblue"
            heading1.style.fontSize="49px"
            heading1.style.color="brown"
            heading1.innerText="welcome to React-js"
            console.log("hello");
        }