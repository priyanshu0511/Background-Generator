window.addEventListener("load", (event) => {
    let color1=document.querySelector("#color1")
    let color2=document.querySelector("#color2")
    let code=document.querySelector(".code");


    color1.addEventListener('input', setGradient);
    color2.addEventListener('input', setGradient);

    function setGradient() {
        document.body.style.background = 'linear-gradient(to right,' + color1.value + ',' + color2.value + ')';
        console.log("Color Changed");
        code.innerHTML=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
  }
  });

