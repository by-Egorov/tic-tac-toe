let ceil = document.getElementsByClassName("game-item"),
  reset = document.getElementById("reset-game"),
  message = document.getElementById("message"),
  messages = document.getElementById("messages"),
  // game = document.querySelector('.game'),
  player = "X",
  stepCount = 0,
  winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    
    [1, 5, 9],
    [3, 5, 7],
  ],
  dataX = [],
  dataO = []

// for (let i = 0; i < 9; i++) {
//   let cell = document.createElement('div')
//   cell.classList.add('game-item')
//   game.appendChild(cell)
// }
for (let i = 0; i < ceil.length; i++) {
  ceil[i].addEventListener("click", currentStep);
}

function currentStep() {
 let num = +this.getAttribute("data-ceil");
  if (!this.textContent) {
    this.innerText = player;
    player === "X"
      ? dataX.push(num) && this.classList.add("x")
      : dataO.push(num) && this.classList.add("o")
    if (
      (dataO.length > 2 || dataX.length > 2) &&
      (checkWin(dataO, num) || checkWin(dataX, num))
    ) {
      for (let i = 0; i < ceil.length; i++) {
        ceil[i].removeEventListener("click", currentStep);
      }
      return (messages.innerText = "Победил игрок " + player) && messages.classList.add('visible');
    }
    changePlayer();
    stepCount++;
    stepCount === 9
      ? messages.innerText = "Ничья"
      : message.innerText = "Ходит игрок " + player
  }
}

function changePlayer() {
  player === "X" ? (player = "O") : (player = "X")
}

reset.addEventListener("click", function() {
  for (let i = 0; i < ceil.length; i++) {
    ceil[i].innerText = ''
  }
  dataO = []
  dataX = []
  player = "X"
  stepCount = 0
  messages.innerText = ''
  messages.classList.remove('visible')
  message.innerText = "Ходит игрок " + player
  for (let i = 0; i < ceil.length; i++) {
    ceil[i].addEventListener("click", currentStep)
    ceil[i].classList.remove("x", "o")
  }
})

function checkWin(arr, number) {
  for (let w = 0, wLen = winCombinations.length; w < wLen; w++) {
    let someWinArr = winCombinations[w]
    let count = 0
    if (someWinArr.indexOf(number) !== -1) {
      for (let k = 0, kLen = someWinArr.length; k < kLen; k++) {
        if (arr.indexOf(someWinArr[k]) !== -1) {
          count++;
          if (count === 3) {
            return true;
          }
        }
      }
      count = 0;
    }
  }
}

