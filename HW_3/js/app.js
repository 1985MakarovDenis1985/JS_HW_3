'use strict';
var str = "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequatur sint iusto ad sed et culpa eum, illum nisi, ipsum unde quis. Officia recusandae consequatur illum illo dolorem, sapiente. Laudantium tenetur impedit porro deleniti non tempore sed quas, distinctio totam fuga, magni dolor commodi aspernatur velit recusandae, cum ad architecto."
var arr_str = str.split(''); // разбиваем на слова // каждое слово с отдельным массивом букв
var target

checkAndChangeWord()

function checkAndChangeWord() {
  target = enterWord();
  if(target === null){
    alert("bye... see you next time");
    return;
  }else if(target == +target){
    alert("it wasn`t word");
    return checkAndChangeWord()
  }else{
    findWord()
    alert(arr_str.join('')); //соединяем обратно
  }
}

function enterWord() {
  return prompt("Enter word please! ...");
}

function findWord() {
  var pos = 0;
  while (true) {
    var foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    arr_str[foundPos] = arr_str[foundPos].toUpperCase();
    pos = foundPos + 1; // продолжить поиск со следующей
  }
}
