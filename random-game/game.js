const countArray = [];
let count = 4;


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
    
}