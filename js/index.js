const gameContainer = document.getElementById('#gameContainer');
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext('2d');
const scoreDisplay = document.querySelector("#score");
const startGameBtn = document.querySelector("#startGameBtn");
const resetBtn = document.querySelector("#resetGameBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const snakeColour = "lightgreen";
const snakeBorder = "darkgreen";
const foodColour = "red";
const foodBorder = "darkred";
const unitSz = 16;

var running = false;
var xVelocity = unitSz;
var yVelocity = 0;
var xFood;
var yFood;
var score = 0;
var snake = [
	{x: gameWidth / 2 + unitSz * 4, y: gameHeight / 2},
	{x: gameWidth / 2 + unitSz * 3, y: gameHeight / 2},
  {x: gameWidth / 2 + unitSz * 2, y: gameHeight / 2},
	{x: gameWidth / 2 + unitSz, y: gameHeight / 2},
	{x: gameWidth / 2, y: gameHeight / 2}
];

Keyboard.Keymap = {
  // Arrow keys
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',

  // WASD keys
  65: 'left',  // 'a' key
  87: 'up',    // 'w' key
  68: 'right', // 'd' key
  83: 'down'   // 's' key
};

function gameStart(){
	running= true;
	scoreDisplay.textContent = "Score: " + score;
	createFood();
	drawFood();
	nextTick();
};

function moveSnake() {
	//TODO
}

function changeDirection(event) {
	//TODO
}


function drawSnakePart(snakePart) {
	ctx.fillStyle = snakeColour;
	ctx.strokeStyle = snakeBorder;
	ctx.fillRect(snakePart.x, snakePart.y, unitSz, unitSz);
	ctx.strokeRect(snakePart.x, snakePart.y, unitSz, unitSz);
}


function generateFood() {
	xFood = Math.floor(Math.random() * gameWidth / unitSz) * unitSz;
	yFood = Math.floor(Math.random() * gameHeight / unitSz) * unitSz;
	snake.forEach(function isFoodOnSnake(part) {
		const foodIsOnSnake = part.x == xFood && part.y == yFood;
		if (foodIsOnSnake)
			generateFood();
	});
}

function resetGame(){
	//TODO
}

function endGame() {
	//TODO
}


document.addEventListener('DOMContentLoaded', (event) => {
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn.addEventListener('click', () => {
		running = true;
    console.log('Start button clicked!');
  });
	const resetGameBtn = document.getElementById('resetGameBtn');
  resetGameBtn.addEventListener('click', () => {
		
      console.log('Reset button clicked!');
  });
});

document.addEventListener('keydown', changeDirection);