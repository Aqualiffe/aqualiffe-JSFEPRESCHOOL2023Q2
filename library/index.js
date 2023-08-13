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



console.log(`
Всего: 50 \n
1. Вёрстка соответствует макету. Ширина экрана 768px +26.
\t блок <header> +2
\t секция Welcome +2
\t секция About +4.
\t секция Favorites +2
\t Сделать кнопку own для последней книги +2
\t секция CoffeShop +4
\t секция Contacts +4
\t секция LibraryCard +4
\t блок <footer> + 2 \n
2. Нет полосы прокрутки, весь контент сохраняется +12 \n
3. На ширине экрана 768рх реализовано адаптивное меню +12
`)