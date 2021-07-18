"use strict";
const words = ["кот", "программа", "собака", "автобус"];
const word = words[Math.floor(Math.random() * words.length)];

const ansverArray = [];

for (let i = 0; i < word.length; i++) {
  ansverArray[i] = "-";
}

console.log(typeof null);

let remainingLetters = word.length;

while (remainingLetters > 0) {
  alert(ansverArray.join(" "));
  const guess = prompt("Угадайте букву или нажмите отмена");
  if (guess === null) {
    break;
  } else if (guess.length > 1) {
    alert("Пожалуйста введите только одну букву!");
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        ansverArray[i] = guess;
        remainingLetters -= 1;
      }
    }
  }
}

alert("Oтлично было загадано слово " + word);
