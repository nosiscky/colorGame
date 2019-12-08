var numbrSquares = 6;
var colors = generateRandomColors(numbrSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //mode buttons event listeners
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpSquares() {
  for (var i = 0; i < colors.length; i++) {
    //add a click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "yay! you guessed right!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "black";
        messageDisplay.textContent = "nope!, try again!";
      }
    });
  }
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numbrSquares = 3) : (numbrSquares = 6);
      /* the line above can be writen as: if (this.textContent === 'Easy') { numbrSquares = 3 } else {numbrSquares = 6;} */
      reset();
    });
  }
}

function reset() {
  colors = generateRandomColors(numbrSquares);
  //pick a random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //add intitial colors to squares
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColor(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  //pick a random number for colors
  var random = Math.floor(Math.random() * colors.length); //make random numbers from 0 to less than length of colors
  return colors[random]; //this is pick a color from  random position
}

function generateRandomColors(num) {
  //make array
  var arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    //get a random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
