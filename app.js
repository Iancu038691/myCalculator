function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function power(a,b) {
    return Math.pow(a,b);
}
function operate(a, symbol, b) {
    if(symbol == '+') return add(a,b);
    if(symbol == '-') return subtract(a,b);
    if(symbol == '*') return multiply(a,b);
    if(symbol == '/') return divide(a,b);
    if(symbol == '^') return power(a,b);
}

const input = document.querySelector('input');

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnplus = document.getElementById('btnplus');
const btnminus = document.getElementById('btnminus');
const btnmultiply = document.getElementById('btnmultiply');
const btndivide = document.getElementById('btndivide');
const btnpower = document.getElementById('btnpower');
const btnclear = document.getElementById('btnclear');
const btnswitch = document.getElementById('btnswitch');

let storage;
 btn0.addEventListener('click', function () { input.value += `0`; storage=input.value;});
 btn1.addEventListener('click', function () { input.value += `1`; storage=input.value;});
 btn2.addEventListener('click', function () { input.value += `2`; storage=input.value;});
 btn3.addEventListener('click', function () { input.value += `3`; storage=input.value;});
 btn4.addEventListener('click', function () { input.value += `4`; storage=input.value;});
 btn5.addEventListener('click', function () { input.value += `5`; storage=input.value;});
 btn6.addEventListener('click', function () { input.value += `6`; storage=input.value;});
 btn7.addEventListener('click', function () { input.value += `7`; storage=input.value;});
 btn8.addEventListener('click', function () { input.value += `8`; storage=input.value;});
 btn9.addEventListener('click', function () { input.value += `9`; storage=input.value;});
 btnpct.addEventListener('click', function () { input.value += `.`; storage=input.value;});
 btnclear.addEventListener('click', function () { input.value = ``; storage='';});
 btnswitch.addEventListener('click', function () { input.value=input.value*-1 ; storage=input.value;});











