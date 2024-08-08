const gameContainer = document.querySelector('#gameContainer');
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext('2d');
const scoreDisplay = document.querySelector("#scoreDisplay");
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
  83: 'down'   // 's' key~
};

function gameStart(){
	//force restart game if Start button is re-clicked
	if (running) {
		resetGame();
		running = false;
	}
	running = true;
	scoreDisplay.textContent = "Score: " + score;
	randomizeFood();
	drawFood();
	nextTick();
};

function nextTick(){
	if(running){
		setTimeout(()=>{
			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
			checkGameOver();
			nextTick();
		}, 16); //16ms = 60fps
	}
	else{
		clearBoard();
		endGame();
		return;
	}
}

function clearBoard(){
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function randomizeFood(){
	function randomFood(min, max){
		const randNum = Math.round((Math.random() * (max - min) + min) / unitSz) * unitSz;
		return randNum;
	}
	xFood = randomFood(0, gameWidth - unitSz);
	yFood = randomFood(0, gameHeight - unitSz);
};

function drawFood(){
	ctx.fillStyle = foodColour;
	ctx.fillRect(xFood, yFood, unitSz, unitSz);

}

function moveSnake() {
	//TODO
}

function drawSnake() {
	ctx.fillStyle = snakeColour;
	ctx.strokeStyle = snakeBorder;
	snake.forEach(snakePart => {
		ctx.fillRect(snakePart.x, snakePart.y, unitSz, unitSz);
		ctx.strokeRect(snakePart.x, snakePart.y, unitSz, unitSz);
	});
}

function changeDirection(event) {
	//TODO
}

function checkGameOver(){
	//TODO
}

function resetGame(){
	running = false;
	score = 0;
	xVelocity = unitSz;
	yVelocity = 0;
	snake = [
		{x: gameWidth / 2 + unitSz * 4, y: gameHeight / 2},
		{x: gameWidth / 2 + unitSz * 3, y: gameHeight / 2},
		{x: gameWidth / 2 + unitSz * 2, y: gameHeight / 2},
		{x: gameWidth / 2 + unitSz, y: gameHeight / 2},
		{x: gameWidth / 2, y: gameHeight / 2}
	];
}

function endGame() {
	ctx.font = "60px comic sans ms";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
	running = false;
};


document.addEventListener('DOMContentLoaded', (event) => {
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn.addEventListener('click', () => {
		running = true;
    console.log('Start button clicked!');
		gameStart();
  });
	const resetGameBtn = document.getElementById('resetGameBtn');
  	resetGameBtn.addEventListener('click', () => {
    console.log('Reset button clicked!');
		resetGame();
  });
});

document.addEventListener('keydown', changeDirection);


