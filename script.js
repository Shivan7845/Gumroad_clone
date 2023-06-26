var scrollTop = function() {
    window.scrollTo(0, 0);
};
scrollTop()
// ========================================================
var navbar = document.querySelector(".nav");
var headerHeight = document.querySelector(".header").offsetHeight;
var nav_part1 = document.querySelector(".nav-part");

window.addEventListener("scroll", function(){
    if(window.pageYOffset >= headerHeight){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
})
// // =====================Gsap====================================

gsap.from(".header h1", {
    y:-100,
    opacity : 0,
    delay :1,
    duration : 1,
})
gsap.from(".nav-part1 h4" , {
    x : 10,
    opacity : 0,
    duration :1,
    delay :2,
    stagger : 0.4,
})

gsap.from(".page1" ,{
    x : 10,
    opacity :0 ,
    duration :1 ,
    delay : 2, 
    scale : 0.5,
})

gsap.from(".p2-content h2",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p2-content h2",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p2-cycle",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p2-cycle",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p3-top h1",{
    y:-100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p3-top h1",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".box ",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".box ",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from("#img2",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : "#img2",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from("#img3",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : "#img3",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".page4 h1",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page4 h1",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".page4 p",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page4 p",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".page4 button",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page4 button",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".page4 img",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page4 img",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})


// ========================================
gsap.from(".p5-left",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p5-left",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p5-right h1",{
    x:100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p5-right h1",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p5-right p",{
    x:100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p5-right p",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p5-right li",{
    x:100,
    opacity : 0 ,
    duration : 1 ,
    stagger : 0.3,
    scrollTrigger :{
        trigger : ".p5-right li",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p6-left p",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p6-left p",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from("#free",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : "#free",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from("#book",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : "#book",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p6-right",{
    y:50,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p6-right",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

// ===========================================

gsap.from(".p7-top",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p7-top",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p7b-top .container",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    stagger : 0.3,
    scrollTrigger :{
        trigger : ".p7b-top .container",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p7b-bottom .container",{
    x:10,
    opacity : 0 ,
    duration : 1 ,
    stagger : 0.3,
    scrollTrigger :{
        trigger : ".p7b-bottom .container",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
// ========================================

gsap.from(".page8",{
    x:100,
    opacity : 0 ,
    duration : 1 ,
    scale : 0.5,
    rotate :180,
    scrollTrigger :{
        trigger : ".page8",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 50%",
        scrub : 4,
    }
})
// =======================================

gsap.from(".page9 h1",{
    y:10,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page9 h1",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".page9 button",{
    y:-100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page9 button",
        scroller : "body" ,
        // markers : true ,
        start : "top 80%",
        end : "top 30%",
        scrub : 4,
    }
})
// ========================================

gsap.from(".page10-left",{
    x:-100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".page10-left",
        scroller : "body" ,
        // markers : true ,
        start : "top 90%",
        end : "top 30%",
        scrub : 4,
    }
})

gsap.from(".p10r-top ul li",{
    x:-100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p10r-top ul li",
        scroller : "body" ,
        // markers : true ,
        start : "top 100%",
        end : "top 30%",
        scrub : 4,
    }
})
gsap.from(".p10r-bottom i",{
    x:-100,
    opacity : 0 ,
    duration : 1 ,
    scrollTrigger :{
        trigger : ".p10r-bottom i",
        scroller : "body" ,
        // markers : true ,
        start : "top 100%",
        end : "top 60%",
        scrub : 4,
    }
})