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
  var x = 'Good Work!'

  if(i > secondNumber){
    alert('First number had to lower than second! Try again...');
    return calcSum();
  }else if(isNaN(i) || isNaN(secondNumber)){
    alert('Sorry, anithing wasn`t number')
    return calcSum();
  }else if(i == 0 || secondNumber == 0){
    return('Ok! See you later..')
  }

  for(i ; i <= secondNumber; i++){
    sum = sum + i;
  }
  return sum + "\nGood work!!!";
};

alert(calcSum());
