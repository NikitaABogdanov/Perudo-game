let diceList = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

let rollDiceButton = document.querySelector("button");
let dice = document.querySelectorAll("img");
let diceCount = dice.length;
let title = document.querySelector("h1");
let player1Dice = document.querySelectorAll(".player1Count img");
let player2Dice = document.querySelectorAll(".player2Count img");

rollDiceButton.addEventListener("click", function rollDice() {
  let sum1 = 0;
  let sum2 = 0;
  title.style.animation = "titleWin 0.5s infinite";
  for (let i = 0; i < diceCount / 2; i++) {
    let randomNumber1 = Math.round(Math.random() * 5);
    let randomNumber2 = Math.round(Math.random() * 5);
    let randomDice1 = diceList[randomNumber1];
    let randomDice2 = diceList[randomNumber2];
    sum1 = sum1 + randomNumber1 + 1;
    sum2 = sum2 + randomNumber2 + 1;
    player1Dice[i].setAttribute("src", randomDice1);
    player2Dice[i].setAttribute("src", randomDice2);
  }
  if (sum1 > sum2) {
    title.innerText = "🚩Player 1 Wins!";
  } else if (sum2 > sum1) {
    title.innerText = "Player 2 Wins!🚩";
  } else {
    title.innerText = "It's a Draw!";
  }
  console.log("player 1 score: " + sum1);
  console.log("player 2 score: " + sum2);
});

rollDiceButton.addEventListener("mouseover", function stopAnimation() {
  for (let i = 0; i < diceCount; i++) {
    dice[i].style.animation = "none";
  }
  title.style.animation = "none";
});

rollDiceButton.addEventListener("mouseout", function runAnimation() {
  for (let i = 0; i < diceCount; i++) {
    dice[i].style.animation = "";
  }
  title.style.animation = "";
});
