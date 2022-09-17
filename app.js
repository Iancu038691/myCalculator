function add(a, b) {
    return (a+b).toFixed(5);
}

function subtract(a, b) {
    return (a-b).toFixed(5);
}

function multiply(a, b) {
    return (a*b).toFixed(5);
}

function divide(a, b) {
    if(a === 0) return 0;
    if(b === 0) return 'Error';
    return (a/b).toFixed(5);
}

function power(a,b) {
    return (Math.pow(a,b)).toFixed(5);
}
function remind(a,b){
    return (a%b).toFixed(5);
}
function operate(a, symbol, b) {
    if(symbol == '+') return add(a,b);
    if(symbol == '-') return subtract(a,b);
    if(symbol == '*') return multiply(a,b);
    if(symbol == '/') return divide(a,b);
    if(symbol == '^') return power(a,b);
    if(symbol == '%') return remind(a,b);
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
const btnequal = document.getElementById("btnequal");
const btnremind = document.getElementById("btnremind");

let doTheCheck = 0;
let storage='';
let symbolOperator='';
let lastStorage='';
 btn0.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `0`; storage=input.value;});
 btn1.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `1`; storage=input.value;});
 btn2.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `2`; storage=input.value;});
 btn3.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `3`; storage=input.value;});
 btn4.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `4`; storage=input.value;});
 btn5.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `5`; storage=input.value;});
 btn6.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `6`; storage=input.value;});
 btn7.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `7`; storage=input.value;});
 btn8.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `8`; storage=input.value;});
 btn9.addEventListener('click', function () {  if(input.value === 'Error') input.value = '';  if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `9`; storage=input.value;});
 btnpct.addEventListener('click', function () { if(input.value === 'Error') input.value = ''; if(doTheCheck != 0) {input.value = ''; doTheCheck = 0;} input.value += `.`; storage=input.value;});
 btnclear.addEventListener('click', function () { input.value = ``; storage=''; symbolOperator = ''; lastStorage='';});
 btnswitch.addEventListener('click', function () { input.value=input.value*-1 ; storage=input.value;});

btnplus.addEventListener('click', function() {
    

    
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '+'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '+';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '+';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
});
btnminus.addEventListener('click', function() {
    
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '-'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '-';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '-';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
    
});

btnmultiply.addEventListener('click', function() {
   
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '*'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '*';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '*';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
    
});

btndivide.addEventListener('click', function() {
    
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '/'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '/';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '/';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
    
});

btnpower.addEventListener('click', function() {
    
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '^'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '^';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '^';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
});

btnremind.addEventListener('click', function() {
   
    if(symbolOperator !== '' && lastStorage !== '' && doTheCheck == 0) {input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage)) + '%'; }
    if(symbolOperator === '')
       {    if(lastStorage === '')  lastStorage = storage;
        
          storage = '';
          doTheCheck = 1;
          symbolOperator = '%';
    }
    if(symbolOperator !== '') {
        lastStorage = input.value;
        doTheCheck = 1;
        symbolOperator = '%';
        
        
    }
    
    if(lastStorage[lastStorage.length-1] === '+' || lastStorage[lastStorage.length-1] === '-' || lastStorage[lastStorage.length-1] === '*' || lastStorage[lastStorage.length-1] === '/' || lastStorage[lastStorage.length-1] === '^' || lastStorage[lastStorage.length-1] === '%' ) lastStorage = lastStorage.slice(0,-1);
   
});


btnequal.addEventListener('click', function() {
    if(lastStorage !== '' && symbolOperator!== '' && storage !== '') {
    input.value = operate(parseInt(lastStorage), symbolOperator, parseInt(storage));
    symbolOperator = '';
    lastStorage = input.value;
    storage = '';
    }
});









