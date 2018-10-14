'use strict';

var durtyArray = [3, 110, 1, 50, 45, 6, 200, 78];
var temp = durtyArray[0];
for(var i = 1; i < durtyArray.length; i++){
  if(temp < durtyArray[i]){
    temp = durtyArray[i]
  }
  console.log(temp);
};
