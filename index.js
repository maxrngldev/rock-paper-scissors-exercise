// This object will contain all our DOM elements, to avoid variable declarations
// This type of constants, which are considered GLOBAL variables, should be in uppercase.
// With this, we have a central place to access our DOM elements
const DOM_ELEMENTS = {
  startBtn: document.getElementById('btn-start'),
  playerBtnContainer: document.querySelector('.player__buttons'),
};

// START GAME
// 1. Add an event listener for a click on the start button
DOM_ELEMENTS.startBtn.addEventListener('click', () => {
  // 2. Enable the user's game buttons
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
  // 3. Start timer, should start at 5 seconds and go down
});
