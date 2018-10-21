'use strict';
var str = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequatur sint iusto ad sed et culpa eum, illum nisi, ipsum unde quis. Officia recusandae consequatur illum illo dolorem, sapiente. Laudantium tenetur impedit porro deleniti non tempore sed quas, distinctio totam fuga, magni dolor commodi aspernatur velit recusandae, cum ad architecto."
var arr_str = str.split(''); // разбиваем на буквы
var target

checkAndChangeWord()

function checkAndChangeWord() {
  target = enterWord(); // запускаем функию определение цели
  if(target === null){ // сравниваем с cancel
    alert("bye... see you next time");
    return;
  }else if(target == +target || target == "/" || target == "+" || target == "-" || target == "*" || target == "="){ // сравниваем с цифрами
    alert("it wasn`t word, try again...");
    return checkAndChangeWord() // если цифра - то возвращаем функцию
  }else{ // норм работа функции
    findWord() // ищем и производим действие над буквами с помощью функции
    alert(arr_str.join('')); //соединяем обратно
  }
}

function enterWord() {
  return prompt("Enter word please! ...");
}

function findWord() { // функция поиска букв
  var pos = 0;
  while (true) {
    var foundPos = str.indexOf(target, pos);// находим букву
    if (foundPos == -1) break;
    arr_str[foundPos] = arr_str[foundPos].toUpperCase(); // делаем заглавной
    pos = foundPos + 1; // продолжить поиск со следующей
  }
}
