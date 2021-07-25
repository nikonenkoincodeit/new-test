const words = ["кот", "собака", "автобус"];
const word = words[Math.floor(Math.random() * words.length)];

const ansverArray = [];

for (let i = 0; i < word.length; i++) {
  ansverArray[i] = "-";
}

let remainingLetters = word.length;

console.log(remainingLetters);

while (remainingLetters > 0) {
  alert(ansverArray.join(" "));
  let guess = prompt("Угадайте букву!");
  guess = guess.toLowerCase();
  console.log(guess);
  if (guess === null) {
    break;
  } else if (guess.length > 1) {
    alert("Пожалуйста введите одну букву!");
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        ansverArray[i] = guess;
        remainingLetters -= 1;
      }
    }
  }
}

alert("Было загаданно слово " + word);
