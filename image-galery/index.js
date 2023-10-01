const AccessKey = 'raq6PABO3x9D7gkPrYxGxWnUqWm9jQhdAkRLpKoF0EE';
const galeryConteiner = document.querySelector('.galery-conteiner');
const searchIn = document.getElementById('search');
const buttonIn = document.querySelector('.button');
let state = [];
const query = 'cat';
searchIn.focus();

async function fetchData(query) {
    try {
        const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${AccessKey}&count=12`;
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok && data.length) {
            state = data;
            setImg();
        }
    } catch(err) {
    console.log(err);
    }
};

const renderImg = () => {
    return state.map(({urls: {regular}, user: {name}}) => {
        return `<img src="${regular} alt="${name}" class='img'>`
    }).join("");
};

const setImg = () => {
    galeryConteiner.innerHTML = renderImg();
    console.log ("state", state)
};

window.addEventListener('load', () => {
    fetchData(query);
});

buttonIn.addEventListener('click', () => {
    const  query = document.getElementsByTagName("input")[0].value;    
    fetchData(query);   
 });

 searchIn.addEventListener('keydown', (elem) => {
    const query = document.getElementsByTagName("input")[0].value;
    if (elem.key === 'Enter'){
        fetchData(query); 
    }
 })