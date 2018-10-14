'use strict';

function askFirstNumber() {
  return +prompt('Enter please first number...');
}

function askSecondNumber() {
  return +prompt('Enter please second number...')
}

function calcSum(){
  var sum = 0;
  var i = askFirstNumber();
  var secondNumber = askSecondNumber();

  if(i > secondNumber){
    alert('Try again...');
    return calcSum();
  };

  for(i ; i <= secondNumber; i++){
    sum = sum + i;
  }
  return sum;
};

alert(calcSum());
