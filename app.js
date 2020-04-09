const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove('mole');
  });

  const noRepeated = [...Array(square.length).keys()].filter(
    (value) => value !== hitPosition
  );
  randomPositon = noRepeated[Math.floor(Math.random() * noRepeated.length)];
  square[randomPositon].classList.add('mole');
  hitPosition = randomPositon;
}

square.forEach((element) => {
  element.addEventListener('mouseup', () => {
    if (element.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function moveMole() {
  setInterval(randomSquare, 700);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`GAME OVER! Your final score is ${result}`);
  }
}

let timerId = setInterval(countDown, 1000);
