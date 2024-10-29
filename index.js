// This object will contain all our DOM elements, to avoid variable declarations
// This type of constants, which are considered GLOBAL variables, should be in uppercase.
// With this, we have a central place to access our DOM elements
const DOM_ELEMENTS = {
  startBtn: document.getElementById('btn-start'),
  resetBtn: document.getElementById('btn-reset'),
  playerBtnContainer: document.querySelector('.player__buttons'),
  timer: document.getElementById('timer'),
};

// START GAME
// 1. Add an event listener for a click on the start button
// With the help of our global variable, we can access to the elements inside our object this easily
DOM_ELEMENTS.startBtn.addEventListener('click', function () {
  // 2. Enable the user's game buttons and disable the start and reset buttons
  // We can do this in 2 ways

  // a) We can request for every button, and change its disabled property, which implies to add 3 variables to our global object

  // const DOM_ELEMENTS = {
  //   startBtn: document.getElementById('btn-start'),
  //   paperBtn: document.getElementById('btn-paper'),
  ///  ...
  // };
  // b) We can request for the button container (PARENT), then access its CHILDREN (the buttons) and remove the disabled attribute (We'll take this one)

  // Children is a property that gives us the elements inside of the element, this will return an array of DOM elements (use console.log to view the result)
  // console.log(DOM_ELEMENTS.playerBtnContainer.children);

  // Since this is an array, we can use the "for of" function to loop through the array and access each button
  for (btn of DOM_ELEMENTS.playerBtnContainer.children) {
    // Update the disabled attribute of the button to false
    btn.disabled = false;
  }

  // Now we need to disable the start and reset buttons, here we'll use the one by one technique
  // DOM_ELEMENTS.startBtn.disabled = true;
  DOM_ELEMENTS.resetBtn.disabled = true;

  // 3. Start timer, should start at 5 seconds and go down
  // This timer, for each second passed, will reduce by 1, so we need to update our DOM every second until the timer reaches 0
  let gameTime = 5;
  DOM_ELEMENTS.timer.innerText = gameTime;

  // We'll use the "setInterval" function to help us execute our logic, this function accepts miliseconds, so 1000ms = 1s

  // "setInterval" does not stop automatically, it will keep executing every second, so we need to stop it manually

  // This function returns an "id", and with the help of "clearInterval", we pass the "id" to "clearInterval"

  const intervalId = setInterval(function () {
    // We access our timer DOM element, and modify its text, based on our time left
    gameTime -= 1; // gameTime = gameTime - 1;
    DOM_ELEMENTS.timer.innerText = gameTime;

    if (gameTime === 0) {
      clearInterval(intervalId);
      // DOM_ELEMENTS.timer.innerText = 5;
    }
  }, 1000);
});
