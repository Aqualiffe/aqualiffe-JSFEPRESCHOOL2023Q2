const game = document.querySelector('.game');
const countArray = [];
let result = document.querySelector('.result');
let count = 4;
let firstOpen = null;
let secondOpen = null;


// function getNamder() {
//     var count = document.getElementById("count").value;
//     document.querySelector(".game").innerHTML = count;
//     console.log(count);
//     console.log(countArray);
// }

//массив
for (let i = 1; i <= count; i++) {
    countArray.push(i, i);
}

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
    card.classList.add("cards")

    card.addEventListener('click', () => {
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
        }

    })

    game.append(card)

}

