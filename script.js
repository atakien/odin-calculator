let currentValue = '';
let previousValue = '';
let operator = '';

document.addEventListener('DOMContentLoaded', function(){
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');
    let deleteEl = document.querySelector('.delete');

    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.oprand');

    let screen = document.querySelector('.display');

    numbers.forEach((number) => number.addEventListener('click', function(e){
      handleNumber(e.target.textContent)
      screen.textContent = previousValue + ' ' + operator + ' ' + currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        screen.textContent = previousValue + ' ' + operator;
    }))

    clear.addEventListener('click', function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        screen.textContent = currentValue;
    })

    equal.addEventListener('click', function(){
        if(currentValue != '' && previousValue != ''){
        calculate();
        if(previousValue.length <= 6){
            screen.textContent = previousValue;
        } else {
            screen.textContent = previousValue.slice(0,5) + '...';
        }
    }
    })

    decimal.addEventListener('click', function(){
        addDecimal()
    })

    deleteEl.addEventListener('click', function(){
        deleteChar()
        screen.textContent = currentValue;
    })
})

function handleNumber(num){
    if(currentValue.length <= 6){
        currentValue += num
    }
}

function handleOperator(op){
operator = op;
previousValue = currentValue;
currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === '+'){
        previousValue += currentValue;
    } else if (operator === '-'){
        previousValue -= currentValue;
    } else if ( operator === '*'){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 10000) / 10000
}

function addDecimal(){
if(!currentValue.includes('.')){
    currentValue += '.';
}
}

function deleteChar(){
    currentValue = currentValue.slice(0, -1);
}