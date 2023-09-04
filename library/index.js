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


/* Бургер меню */
document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function() {
        main_header.classList.toggle("open")
    })
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav-menu").addEventListener("click", function(e) {
        e.isClick = true;
    })
});

document.addEventListener("DOMContentLoaded", function() {
    burger.addEventListener("click", function(e) {
        e.isClick = true; 
    })
});

menuItems.forEach(e => {
    e.addEventListener("click", function() {
        main_header.classList.toggle("open")        
    })
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function(e) {
        if (e.isClick == true) return;
        main_header.classList.remove("open"); 
    })
});

/* Profile menu*/
const dropMenu = document.querySelector(".dropMenu");
const logo = document.querySelector(".logo");

const removeDropMenuOpen = function() {
         dropMenu.classList.remove("open");
};

const openDropMenu = () => {
    dropMenu.classList.toggle("open");
};
document.addEventListener("DOMContentLoaded", function() {
    logo.addEventListener("click", openDropMenu)
});

const closeDropMenu = (e) => {
    const clickMenu=e.composedPath().includes(dropMenu);
    const clickLogo=e.composedPath().includes(logo);
    if (!clickMenu & !clickLogo) {
        dropMenu.classList.remove("open");
    }
};

document.addEventListener('click', closeDropMenu);


// modal
const modalControler = ({modalElem, btnOpen, btnClose, activModal}) => {
    const buttonLogIn = document.querySelector(btnOpen);
    const modal = document.querySelector(modalElem);
    const modalLogIn = document.querySelector(activModal);
    const buttonModalClose = document.querySelector(btnClose);

    const closeModal = function(e) {
        const clickModalLogIn=e.composedPath().includes(modalLogIn);
        const clickMenu=e.composedPath().includes(dropMenu);
        const clickLogo=e.composedPath().includes(logo);
        const clickButtonOpen=e.composedPath().includes(buttonLogIn);      
        const clickButtonClose=e.composedPath().includes(buttonModalClose);
        if (!clickButtonOpen & !clickModalLogIn & !clickLogo & !clickMenu || clickButtonClose) {
            modal.classList.remove('open');
        } 
    };

    const openModal = function() {
        modal.classList.add("open");
    };

    document.addEventListener('click', closeModal);

    buttonLogIn.addEventListener('click', function(){
        openModal();
        removeDropMenuOpen();
    });
};



modalControler({
    modalElem: '.modalIn',
    btnOpen: '.btn_menu_log-in',
    btnClose: '.x-log',
    activModal: '.modal_logIn'
});

modalControler({
    modalElem: '.modalReg',
    btnOpen: '.btn_menu_register',
    btnClose: '.x-reg',
    activModal: '.modal_Register'
});

modalControler({
    modalElem: '.modalProfile',
    btnOpen: '.btn_menu_my-profile',
    btnClose: '.x-profile',
    activModal: '.modal_profile'
});

modalControler({
    modalElem: '.modalIn',
    btnOpen: '.btn_card_log-in',
    btnClose: '.x-log',
    activModal: '.modal_logIn'
});


// Кнопка копирования
function Copy(containerid) {
    let textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(containerid).innerText;
    let selector = document.querySelector('#temp');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
