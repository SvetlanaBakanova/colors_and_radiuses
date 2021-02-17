
let codeColor = document.querySelector(".name__color");

 
document.querySelector("body").addEventListener("keyup", function() {
        let     r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = `#` + r.toString(16) + g.toString(16) + b.toString(16);
    document.body.style.background = color;
    codeColor.innerText = color;    
    
});


  
