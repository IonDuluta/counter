const number = document.getElementById('number');
const buttonPlus = document.getElementById('plus');
const buttonMinus = document.getElementById('minus');
const buttonClear = document.getElementById('clear');

buttonPlus.addEventListener('click', add);
buttonMinus.addEventListener('click', subtract);
buttonClear.addEventListener('click',clear);

let value = 0;

function add() {
    value++;
    number.innerHTML = value;
}

function subtract() {
    value--;
    number.innerHTML = value;
}

function clear() {
    value = 0
    number.innerHTML = value;
}