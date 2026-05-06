/* Бургер меню */
const burger = document.getElementById("burger");
const main_header = document.querySelector(".main-header");
const menuItems = document.querySelectorAll('.menu-element');
const modalLogin = document.querySelector('.modalIn');
const errorInfo = document.querySelector('.error-pass');

document.addEventListener("DOMContentLoaded", function () {
    burger.addEventListener("click", function () {
        main_header.classList.toggle("open")
    })
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav-menu").addEventListener("click", function (e) {
        e.isClick = true;
    })
});

document.addEventListener("DOMContentLoaded", function () {
    burger.addEventListener("click", function (e) {
        e.isClick = true;
    })
});

menuItems.forEach(e => {
    e.addEventListener("click", function () {
        main_header.classList.toggle("open")
    })
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (e) {
        if (e.isClick == true) return;
        main_header.classList.remove("open");
    })
});


/* Profile menu*/
const dropMenu = document.querySelector(".dropMenu");
const logo = document.querySelector(".logo");

const profileLogo = document.querySelector(".logo_profile");


const removeDropMenuOpen = function () {
    dropMenu.classList.remove("open");
};

const openDropMenu = () => {
    dropMenu.classList.toggle("open");
};

document.querySelector('.user-account').onclick = openDropMenu;


const closeDropMenu = (e) => {
    const clickMenu = e.composedPath().includes(dropMenu);
    const clickLogo = e.composedPath().includes(logo);
    const clickProfileLogo = e.composedPath().includes(profileLogo);
    if (!clickMenu & !clickLogo & !clickProfileLogo) {
        dropMenu.classList.remove("open");
    }
};


// modal
const modalControler = ({ modalElem, btnOpen, btnClose, activModal }) => {
    const buttonLogIn = document.querySelector(btnOpen);
    const modal = document.querySelector(modalElem);
    const modalLogIn = document.querySelector(activModal);
    const buttonModalClose = document.querySelector(btnClose);


    const closeModal = function (e) {
        const clickModalLogIn = e.composedPath().includes(modalLogIn);
        const clickMenu = e.composedPath().includes(dropMenu);
        const clickLogo = e.composedPath().includes(logo);
        const clickProfileLogo = e.composedPath().includes(profileLogo);
        const clickButtonOpen = e.composedPath().includes(buttonLogIn);
        const clickButtonClose = e.composedPath().includes(buttonModalClose);
        if (clickButtonOpen) {
            modal.classList.add("open");
            setTimeout(() => {
                if (modal.classList.contains('open') && modalElem === '.modalProfile') {
                    renderBookList();
                }
            }, 100);
        } else if (!clickModalLogIn & !clickLogo & !profileLogo & !clickMenu || clickButtonClose) {
            modal.classList.remove('open');
            setTimeout(() => {
            if (modal.classList.contains('open') && modalElem === '.modalProfile') {
                renderBookList();
            }
        }, 100);
        }
    };

    const openModal = function () {
        modal.classList.add("open");

    };

    document.addEventListener('click', closeModal);

    buttonLogIn.addEventListener('click', function () {
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
    modalElem: '.modalProfile',
    btnOpen: '.btn_card_profile',
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
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[e].classList.add('active');
};


const slide = () => {
    const imageWidth = 475;
    const slideOffset = -slideIndex * imageWidth;
    slider.style.transform = `translateX(${slideOffset}px)`;
    activeDot(slideIndex);
    if (slideOffset == 0) {
        btnLeft.setAttribute('disabled', true)
    } else if (slideOffset != 0 & slideOffset != -1900) {
        btnLeft.removeAttribute('disabled');
        btnRight.removeAttribute('disabled');
    } else if (slideOffset == -1900) {
        btnRight.setAttribute('disabled', true);
    }
};


dots.forEach((item, indexDot) => {
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

//Был уже пользователь или нет
let currentUser = null;
document.addEventListener("DOMContentLoaded", function () {
    restoreSession();
});

//Регистрация
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const modalReg = document.querySelector(".modalReg");
document.querySelector('.btn_signUp').addEventListener('click', function () {
    let CardNumberValue = generateRandomNumber()
    let userKey = `user_${CardNumberValue}`
    const user = {
        firstName: document.getElementById('name-Reg').value,
        lastName: document.getElementById('surname-Reg').value,
        email: document.getElementById('email-Reg').value,
        password: document.getElementById('password-Reg').value,
        cardNumber: CardNumberValue,
        visits: 0,
        auth: '',
        books: []
    };
    localStorage.setItem(userKey, JSON.stringify(user));
    modalReg.classList.remove("open")
    loginUser(user)
})


//Генерация карты
function generateRandomNumber() {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    let randomDigits = '';
    for (let i = 0; i < 8; i++) {
        randomDigits += Math.floor(Math.random() * 10);
    }
    return randomLetter + randomDigits;
}

//Авторизация
const profileIco = document.querySelector(".ico_profile_login");
const imgUserName = document.querySelector(".img_user-name");
const UserName = document.querySelector(".user-name");
const authWith = document.querySelector('.with');
const authNo = document.querySelector('.no');
const cardInfo = document.querySelector('.card-info');
const cardInfoLogin = document.querySelector('.LibraryCard_login');
const profileCN = document.querySelector('.profile_CN');
const inputName = document.querySelector('.inputName');
const inputCardNumber = document.querySelector('.inputCardNumber');
const userVisits = document.querySelector('.items-visits');
let favorites = document.querySelector('.Favorites');
let bookList = document.querySelector('.rented_book_list');
let qtyBooks = document.querySelector('.items-books')

function loginUser(user) {

    logo.classList.add("close");
    profileLogo.classList.remove("close");
    authWith.classList.add("close");
    authNo.classList.remove("close");
    cardInfoLogin.classList.remove("close");
    cardInfo.classList.add("close");
    profileIco.textContent = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`;
    imgUserName.textContent = `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`;
    UserName.textContent = `${user.firstName[0].toUpperCase()}${user.firstName.slice(1).toLowerCase()} ${user.lastName[0].toUpperCase()}${user.lastName.slice(1).toLowerCase()}`;
    inputName.value = `${user.firstName[0].toUpperCase()}${user.firstName.slice(1).toLowerCase()} ${user.lastName[0].toUpperCase()}${user.lastName.slice(1).toLowerCase()}`;
    profileCN.textContent = `${user.cardNumber}`;
    inputCardNumber.value = `${user.cardNumber}`;
    user.visits = user.visits + 1;
    user.auth = true;
    const userKey = `user_${user.cardNumber}`;
    // console.log(user.auth);
    // console.log(user.visits);
    console.log(user.books);
    userVisits.textContent = user.visits;
    localStorage.setItem(userKey, JSON.stringify(user));
    sessionStorage.setItem('currentUserKey', userKey);
    currentUser = user;
    buyBtn(currentUser);
}

//Проверка логина и пароля
const btnLogIn = document.querySelector('.btn_logIn');

btnLogIn.addEventListener('click', function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    login(email, password)
    restoreSession();
})

//Все пользователи
function login(identifier, password) {
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            const user = JSON.parse(localStorage.getItem(key));
            const isEmailMatch = (user.email === identifier);
            const isCardMatch = (user.cardNumber === identifier);
            if ((isEmailMatch || isCardMatch) && user.password === password) {
                console.log('Успешный вход!');
                loginUser(user);
                modalLogin.classList.remove('open');
                errorInfo.classList.add('close');
                btnLogIn.classList.remove('error-logIn');
                return user;
            }
        }
    }
    errorInfo.classList.remove('close');
    btnLogIn.classList.add('error-logIn');
    return null;
}


//Выход
function logOut() {
    logo.classList.remove("close");
    profileLogo.classList.add("close");

    authWith.classList.remove("close");
    authNo.classList.add("close");

    cardInfoLogin.classList.add("close");
    cardInfo.classList.remove("close");

    removeDropMenuOpen();
    currentUser.auth = false;
    const userKey = `user_${currentUser.cardNumber}`;
    localStorage.setItem(userKey, JSON.stringify(currentUser));
    sessionStorage.removeItem('currentUserKey');
    currentUser = null;
    restoreSession()
}

document.querySelector('.btn_menu_log-out').onclick = logOut

function restoreSession() {
    const currentUserKey = sessionStorage.getItem('currentUserKey');
    if (currentUserKey) {
        const user = JSON.parse(localStorage.getItem(currentUserKey));
        if (user && user.auth === true) {
            loginUser(user);
            console.log(currentUser);
            buyBtn(user)
            renderBookList();
        }
    } else if (!currentUserKey) {
        console.log('Пожалуйста, войдите в систему');
        favorites.onclick = function (e) {
            modalLogin.classList.add('open');
        }
    }
}

function renderBookList() {
    // Очищаем список
    bookList.innerHTML = '';
    // Перерисовываем все книги
    if (currentUser && currentUser.books) {
        for (let item of currentUser.books) {
            let li = document.createElement('li');
            li.classList.add('rented_book_item');
            li.textContent = item;
            bookList.append(li);
        }
        qtyBooks.textContent = currentUser.books.length;
        console.log(currentUser.books.length);
    }
checkScrollbar();
}

function buyBtn(user) {
    currentUser = user;
    updateBuyButtons()
    favorites.onclick = function (e) {
        if (e.target.className != 'book_button') return;
        let bookCard = e.target.closest('.favorites-book');
        let bookName = bookCard.querySelector('.book-name').textContent;
        let bookAuthor = bookCard.querySelector('.book-author').textContent;
        let book = `${bookName}, ${bookAuthor.slice(3)}`;
        if (!currentUser.books.includes(book)) {
            currentUser.books.push(book);
            const userKey = `user_${currentUser.cardNumber}`;
            localStorage.setItem(userKey, JSON.stringify(currentUser));
            sessionStorage.setItem('currentUserKey', userKey);
            e.target.disabled = true;
            e.target.textContent = 'Own';
            e.target.style.cursor = 'not-allowed';
            console.log('Добавлена книга:', book);
        } else {
            console.log('Книга уже есть в списке');
        }
    };

    //удаление
    bookList.onclick = function (e) {
        if (e.target.classList.contains('rented_book_item')) {
            let bookText = e.target.textContent;
            let index = currentUser.books.indexOf(bookText);
            if (currentUser.books.includes(bookText)) {
                currentUser.books.splice(index, 1);
                const userKey = `user_${currentUser.cardNumber}`;
                localStorage.setItem(userKey, JSON.stringify(currentUser));
                sessionStorage.setItem('currentUserKey', userKey);
                renderBookList();
                updateBuyButtons();
                console.log('Удалена книга:', bookText);
            }
        }
    };
}
const buyButtons = favorites.querySelectorAll('.book_button');
console.log(buyButtons);


//кнопки buy
function updateBuyButtons() {
    const buyButtons = favorites.querySelectorAll('.book_button');
    buyButtons.forEach(button => {
        const bookCard = button.closest('.favorites-book');
        const bookName = bookCard.querySelector('.book-name').textContent;
        const bookAuthor = bookCard.querySelector('.book-author').textContent;
        const book = `${bookName}, ${bookAuthor.slice(3)}`;
        if (currentUser && currentUser.books.includes(book)) {
            button.disabled = true;
            button.textContent = 'Own';
            button.style.cursor = 'not-allowed';
        } else {
            button.disabled = false;
            button.textContent = 'Buy';
            button.style.cursor = 'pointer';
        }
    });
}

function checkScrollbar() {
    const list = document.querySelector('.rented_book_list');
    if (list) {
        const hasScrollbar = list.scrollHeight > 91;
        console.log('checkScrollbar вызван');
        console.log('scrollHeight:', list.scrollHeight);
        console.log('clientHeight:', list.clientHeight);
        console.log('hasScrollbar:', hasScrollbar);

        if (!hasScrollbar) {
            list.style.overflowY = 'hidden';
            console.log('Скрываем скролл');
        } else {
            list.style.overflowY = 'auto';
            console.log('Показываем скролл');
        }
    } else {
        console.log('Список не найден');
    }
}