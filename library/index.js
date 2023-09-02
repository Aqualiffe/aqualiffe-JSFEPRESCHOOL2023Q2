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

const burger = document.getElementById("burger");
const main_header = document.querySelector(".main-header");
const menuItems = document.querySelectorAll('.menu-element');
const dropMenu = document.querySelector(".dropMenu");
const logo = document.querySelector(".logo");
const buttonLogIn = document.querySelector('.log-in');
const modal = document.querySelector('.modal');
const modalLogIn = document.querySelector('.modal_logIn');

/* Бургер меню */
document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function() {
        main_header.classList.toggle("open")
    })
})

/*  document.querySelector(".main-header").classList.remove("open")*/ 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav-menu").addEventListener("click", function(e) {
        e.isClick = true;   
        // console.log('клик внутри1');
    })
})

document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function(e) {
        e.isClick = true;   
        // console.log('клик внутри2');
    })
})

menuItems.forEach(e => {
    e.addEventListener("click", function() {
        main_header.classList.toggle("open")
        // console.log("клик по ссылке")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(e) {
        if (e.isClick == true) return;
        main_header.classList.remove("open");        
        // console.log('клик внe блока');
    })
})

/* Profile menu*/

const removeDropMenuOpen = function() {
         dropMenu.classList.remove("open");
};


document.addEventListener("DOMContentLoaded", function() {
    logo.addEventListener("click", function() {
       // console.log("клик по лого");
        dropMenu.classList.toggle("open");
    })
})


document.addEventListener('click', function(e) {
    const clickMenu=e.composedPath().includes(dropMenu);
    const clickLogo=e.composedPath().includes(logo);
    if (!clickMenu & !clickLogo) {
        dropMenu.classList.remove("open");
    }
});


// modal



// modal.style.cssText = `
//     displey: flex;
//     visibility: hidden;
//     opacity: 0;
//     transition: opacity 300ms easy-in-out;
// `;
 
// const closeModal = function(e) {
//     const target = e.target;
//     if (target === modal) {
//        modal.classList.add('close');
//     }
// };


const openModal = function() {
    modal.classList.add('open');
    // modal.style.visibility = 'visible';
    // modal.style.opacity = 1;
};

buttonLogIn.addEventListener('click', function(){
    openModal();
    removeDropMenuOpen();
});

document.addEventListener('click', function(e) {
    const clickModal=e.composedPath().includes(modal);
    console.log(clickModal);
    if (!clickModal) {
        modal.classList.remove('open');
    }
});
