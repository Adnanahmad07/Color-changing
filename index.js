// Get the button element
var colorBtn = document.querySelector('.color-btn');

// Define an array of colors
var colors = ['#FF0000', '#00FF00', '#00jj00', '#00FF77', '#0ff883', '#00FF45', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

// Function to generate a random color from the array
function getRandomColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to change the background color
function changeBackgroundColor() {
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
// colorBtn.addEventListener('click', changeBackgroundColor);
