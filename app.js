let playerInput = 0;
let computerInput = 0;
let rockValue = 1;
let paperValue = 2;
let scissorValue = 3;
let choices = ['rock', 'paper', 'scissors']

//  rock = <i class="fa fa-4x p-3 fa-hand-rock-o"></i>
//  paper = <i class="fa fa-4x p-3 fa-hand-paper-o"></i>
//  scissors = <i class="fa fa-4x p-3 fa-hand-scissors-o"></i>
// DRAW HANDLER

// draw the players Choice
function drawPlayer(input) {
  // debugger
  let output = 'not working'
  switch (input) {
    case 'rock': output = `<i class="fa fa-4x p-4 fa-hand-rock-o"></i>`
      break;
    case 'paper': output = `<i class="fa fa-4x p-4 fa-hand-paper-o"></i>`
      break;
    case 'scissors': output = `<i class="fa fa-4x p-4 fa-hand-scissors-o"></i>`
      break;
  }
  let playerElem = document.getElementById("Player")
  playerElem.innerHTML = output
  playerElem.classList.remove("border")
  playerElem.classList.remove("border-success")
  playerElem.classList.remove("shadow")
}

// draw the computers Choice
function drawComputer(input) {
  // debugger

  let output = 'not working'
  switch (input) {
    case 'rock': output = `<i class="fa fa-4x p-4 fa-hand-rock-o"></i>`
      break;
    case 'paper': output = `<i class="fa fa-4x p-4 fa-hand-paper-o"></i>`
      break;
    case 'scissors': output = `<i class="fa fa-4x p-4 fa-hand-scissors-o"></i>`
      break;
  }
  let computerElem = document.getElementById("Computer")
  computerElem.innerHTML = output
  computerElem.classList.remove("border")
  computerElem.classList.remove("border-success")
  computerElem.classList.remove("shadow")
}
// draw the winner
function drawWinner(input) {
  let winnerElem = document.getElementById("winner")
  let playerElem = document.getElementById("Player")
  let computerElem = document.getElementById("Computer")
  winnerElem.innerHTML = input
  if (input == "Player Wins!") {
    playerElem.classList.add("border")
    playerElem.classList.add("border-success")
    playerElem.classList.add("shadow")
  } else if (input == "Computer Wins!") {
    computerElem.classList.add("border")
    computerElem.classList.add("border-success")
    computerElem.classList.add("shadow")
  }

}
//tims test
// GAME HANDLER

// Capture the PLAYERS Choice
function playerChoice(playerChoice) {
  switch (playerChoice) {
    case 'rock': playerInput = rockValue;
      break;
    case 'paper': playerInput = paperValue;
      break;
    case 'scissors': playerInput = scissorValue;
      break;
  }
  drawPlayer(playerChoice)
  console.log(`Player:${choices[(playerInput - 1)]}`)
  randomizer()
}

// Determin Computers Choice
function computerChoice() {
  let math = Math.floor(Math.random() * choices.length)
  let choice = choices[math]
  computerPlay(choice)
}

// Randomizer Effect
function randomizer() {
  let seconds = 1000
  let timeout = seconds * 3
  let interval = setInterval(computerChoice, seconds / 10)
  let clearIntervalHandler = function () {
    clearInterval(interval)
  }
  setTimeout(clearIntervalHandler, timeout)
  setTimeout(resolveWinner, (timeout + (.5 * seconds)))

}

// Capture the COMPUTERS Choice
function computerPlay(value) {
  switch (value) {
    case 'rock': computerInput = rockValue;
      break;
    case 'paper': computerInput = paperValue;
      break;
    case 'scissors': computerInput = scissorValue;
      break;
  }
  drawComputer(value)
  console.log(`Computer:${choices[(computerInput - 1)]}`)
}


// Resolve a winner
function resolveWinner(x, y) {
  let winner = 0;
  if (playerInput == computerInput) {
    winner = "No One"
  } else if ((playerInput == rockValue && computerInput == paperValue) || (playerInput == paperValue && computerInput == scissorValue) || (playerInput == scissorValue && computerInput == rockValue)) {
    winner = "Computer"
  } else if ((playerInput == paperValue && computerInput == rockValue) || (playerInput == scissorValue && computerInput == paperValue) || (playerInput == rockValue && computerInput == scissorValue)) {
    winner = "Player"
  }
  drawWinner(`${winner} Wins!`)
  // window.alert(`${winner} Wins!`)
  console.log(playerInput)
  console.log(computerInput)
  console.log(`${winner} Wins!`)
}