document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".main-header").classList.toggle("open")
    })
})

/*  document.querySelector(".main-header").classList.remove("open")*/ 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav-menu").addEventListener("click", function(e) {
        e.isClick = true;   
        console.log('клик внутри1');
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(e) {
        e.isClick = true;   
        console.log('клик внутри2');
    })
})
const menuItems = document.querySelectorAll('.menu-element');

menuItems.forEach(e => {
    e.addEventListener("click", function() {
        document.querySelector(".main-header").classList.toggle("open")
        console.log("клик по ссылке")
    })
})



document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(e) {
        if (e.isClick == true) return;
        document.querySelector(".main-header").classList.remove("open")
        console.log('клик внe блока');
    })
})
