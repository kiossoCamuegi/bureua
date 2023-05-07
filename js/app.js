let btn1  = document.getElementById("show1")
let btn2  = document.getElementById("show2")
let navbar = document.getElementById("navbar")

btn1.addEventListener("click" , function(){
    navbar.classList.toggle("hide");
})
btn2.addEventListener("click" , function(){
    navbar.classList.toggle("hide");
})