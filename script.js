
var navbar = document.querySelector(".nav");
var headerHeight = document.querySelector(".header").offsetHeight;
var nav_part1 = document.querySelector(".nav-part");

window.addEventListener("scroll", function(){
    if(window.pageYOffset >= headerHeight){
        navbar.classList.add('sticky');
        nav_part1.innerHTML("Gumroad")
    }else{
        navbar.classList.remove('sticky');
    }
})