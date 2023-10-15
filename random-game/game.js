const submitCount = document.getElementById('submit');
const updateGame = document.getElementById('update');
const game = document.querySelector('.game');
let result = document.querySelector('.result');
const qtStep = document.querySelector('.qt');
const tableResalt = document.querySelector('.table-result');
let count = 4;
let step = 0;
let qtStepArr = [];

function startGame(game, count) {
    count = document.getElementById("count").value;
    const countArray = [];
    let firstOpen = null;
    let secondOpen = null;
    step = 0;
    //массив
    for (let i = 1; i <= count; i++) {
        countArray.push(i, i);
    }

    //настройка вывода
    let column = 4
    if (count >= 11) {
        column = 6;        
    } else if (count % 3 === 0) {
        column = 3;
    } else if (count % 4 === 0 || count == 2) {
        column = 4;
    } else if (count % 5 === 0) {
        column = 5;
    }  

    game.style = `grid-template-columns: repeat(${column}, 1fr);`   

    //рандом
    for (let i = 0; i < countArray.length; i++) {
        let rndIndex = Math.floor(Math.random() * countArray.length)
        let tmp = countArray[i];
        countArray[i] = countArray[rndIndex];
        countArray[rndIndex] = tmp;
    }

    //вывод карт

    for (const item of countArray) {
        let card = document.createElement('div');
        card.textContent = item;
        card.classList.add("cards");
        if (count >= 11) {
            card.classList.add("min-cards");
        }  

        card.addEventListener('click', () => {            
            step ++;
            if (card.classList.contains('open')|| card.classList.contains('final')){
                return;
            }
            if (firstOpen !== null && secondOpen!==null) {
                firstOpen.classList.remove('open')
                secondOpen.classList.remove('open')
                firstOpen = null;
                secondOpen = null;
            }           

            card.classList.add('open');
            
            if (firstOpen === null) {
                firstOpen = card;
            } else {
                secondOpen = card;
            }
            if (firstOpen !== null && secondOpen!==null) {
            let firstOpenNum = firstOpen.textContent;
            let secondOpenNum = secondOpen.textContent;

            if (firstOpenNum === secondOpenNum) {
                firstOpen.classList.add('final')
                secondOpen.classList.add('final')
            }

            }
            if (countArray.length === document.querySelectorAll('.final').length){                
                result.innerHTML = 'Победа!';
                game.innerHTML = '';                
                outputResults(step);
                 
                for (let i=0; i < qtStepArr.length; i++) {
                    if (qtStepArr[i] != step) {
                        qtStepArr.push(step);                    
                    }                          
                }

                console.log(qtStepArr);
            }
            
            qtStep.innerHTML = step; 
            
            // localStorage.setItem(step);
            // qtStepArr[] = step;
            // console.log(qtStepArr);
        })        
        game.append(card)        
    } 
};

startGame(game, count);

updateGame.addEventListener('click', ()=> {
    game.innerHTML = '';
    startGame(game, count);
});

submitCount.addEventListener('click', () => {
    let countNew = document.querySelector('#count').value;
    game.innerHTML = '';
    startGame(game, countNew);
})

function outputResults(step) {
    tableResalt.innerHTML = `Тут должна быть таблица побед(не вышло): ${step}`;    
}
