var initialPos = 325;
const moveDown = function() {
  let square = document.getElementById("square");
  if (initialPos < 550)
    initialPos += 10;
  square.style = `top: ${initialPos}px`;
};

const moveUp = function() {
  let square = document.getElementById("square");
  if (initialPos > 85)
    initialPos -= 10;
  square.style = `top: ${initialPos}px`;
};

const move = function(event) {
  if (event.keyCode == 38) {
    moveUp();
  }
  if (event.keyCode == 40) {
    moveDown();
  }
};

var brickInitialPos = 970;
const moveLeft = function() {
  let brick = document.getElementById("brick");
  let topPosition = Math.floor(Math.random() * 500);
  let height = Math.floor(Math.random() * 350);
  if (height + topPosition < 500 && brickInitialPos < 5) {
    brick.style.top = topPosition + "px";
    brick.style.height = height + "px";
    brickInitialPos = 970;
  }
  brickInitialPos -= 1;
  brick.style.left = brickInitialPos + "px";
};

let intervals = [];
const isOverlaped = function() {
  let gameOverBox = document.getElementById("gameOverBox");
  let square = document.getElementById("square");
  let brick = document.getElementById("brick");
  let squareRight = square.offsetLeft + square.offsetHeight;
  let squareTop = square.offsetTop;
  let squareBottom = squareTop + square.offsetHeight;
  let brickLeft = brick.offsetLeft;
  let brickTop = brick.offsetTop;
  let brickBottom = brickTop + brick.offsetHeight;
  if (squareRight == brickLeft && squareBottom >= brickTop && squareTop <= brickBottom) {
    intervals.forEach(clearInterval);
    gameOverBox.style.visibility = "visible";
  }
};

const restartGame = function(){
  window.location.reload();
};

const startGame = function() {
  intervals.push(setInterval(moveLeft, 0.1));
  intervals.push(setInterval(isOverlaped, 1));
  document.getElementById("start").disabled = true;
};
