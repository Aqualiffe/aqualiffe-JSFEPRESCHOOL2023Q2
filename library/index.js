// console.log(`
// Всего: 50 \n
// 1. Вёрстка соответствует макету. Ширина экрана 768px +26.
// \t блок <header> +2
// \t секция Welcome +2
// \t секция About +4.
// \t секция Favorites +2
// \t Сделать кнопку own для последней книги +2
// \t секция CoffeShop +4
// \t секция Contacts +4
// \t секция LibraryCard +4
// \t блок <footer> + 2 \n
// 2. Нет полосы прокрутки, весь контент сохраняется +12 \n
// 3. На ширине экрана 768рх реализовано адаптивное меню +12
// `)


/* Бургер меню */
const burger = document.getElementById("burger");
const main_header = document.querySelector(".main-header");
const menuItems = document.querySelectorAll('.menu-element');

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
        if (clickButtonOpen) {
            modal.classList.add("open");
        } else if (!clickModalLogIn & !clickLogo & !clickMenu || clickButtonClose) {
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

modalControler({
    modalElem: '.modalReg',
    btnOpen: '.btn_card_register',
    btnClose: '.x-reg',
    activModal: '.modal_Register'
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
};


// Покупка книг
const btnsBook = document.querySelectorAll('.book_button');
const modalBuyCard = document.querySelector('.modal-buy-a-card');
const btnBuyClose = document.querySelector('.x-buy-a-card');
const actBuyCard = document.querySelector('.modal_buy-a-card');


const openModalBuyCard = function() {
    modalBuyCard.classList.add("open");
};

btnsBook.forEach(e => {
    e.addEventListener('click', () => {
        openModalBuyCard();        
    })    
});

const closeModalBuyCard = function(e) {
    const clickBuyClose = e.composedPath().includes(btnBuyClose);
    // const clickBuyCard = e.composedPath().includes(actBuyCard);    
    // const clickBtnBooks = e.composedPath().includes(btnsBook);
    if (clickBuyClose){      
        modalBuyCard.classList.remove('open');
    }
    
};

document.addEventListener('click', closeModalBuyCard);

// смена имени кнопки


//слайдер

const btnLeft = document.querySelector('.carret_left');
const btnRight = document.querySelector('.carret_right');
const slider = document.querySelector('.gallery-imgs');
const slides = document.querySelectorAll('.img_about-gallery');
const dots = document.querySelectorAll('.dot');
const slideCount = slides.length;
const slideOffset = 0;
const dotCount = dots.length;
let slideIndex = 0;
let dotIndex = 0;

const activeDot = (e) => {
    for(dot of dots) {
        dot.classList.remove('active');        
    }
    dots[e].classList.add('active');
};


const slide = () => {
    const imageWidth = 475;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
    activeDot(slideIndex);
    if (slideOffset == 0 ) {
        btnLeft.setAttribute('disabled', true)
    }else if (slideOffset != 0 & slideOffset != -1900 ) {
        btnLeft.removeAttribute('disabled');
        btnRight.removeAttribute('disabled');
    } else if (slideOffset == -1900) {
        btnRight.setAttribute('disabled', true);        
    }
};


dots.forEach((item, indexDot)=> {
    item.addEventListener('click', () => {
        slideIndex = indexDot;
        slide();
    })
})

btnLeft.addEventListener('click', () => { 
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();   
});
  
btnRight.addEventListener('click', () => {    
    slideIndex = (slideIndex + 1) % slideCount;
    slide();    
});

window.addEventListener('resize', () => {
    activeDot(0);
    slider.style.transform = 'translateX(0px)';

});


// Change seasons

const radioButtons = Array.from(document.querySelectorAll('.group-seasons'));
const radioInputs = Array.from(document.querySelectorAll('.radio-button'));
const favoritesCards = Array.from(document.querySelectorAll('.favorites-conteiner'));
let activeBtn = radioButtons[0];
let activeSeasons = favoritesCards[0];

activeSeasons.classList.add('active');

radioButtons.forEach(elem => {
    elem.addEventListener('click', btnClick)
});

function btnClick(e) {
    const btn = e.target.closest('.group-seasons');
    changeBtn(btn);
};

function changeBtn(btn) {
    activeBtn = btn;
    const indexBtn = radioButtons.indexOf(btn);
    changeSeasons(indexBtn);
};

function changeSeasons(index) {
    activeSeasons.classList.remove('active');
    favoritesCards[index].classList.add('active'); 
    activeSeasons = favoritesCards[index];
};
