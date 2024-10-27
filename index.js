// This object will contain all our DOM elements, to avoid variable declarations
// This type of constants, which are considered GLOBAL variables, should be in uppercase.
// With this, we have a central place to access our DOM elements
const DOM_ELEMENTS = {
  startBtn: document.getElementById('btn-start'),
};

// START GAME
// 1. Add an event listener for a click on the start button
DOM_ELEMENTS.startBtn.addEventListener('click', () => {
  // 2. Enable the user's game buttons
  // 3. Start timer, should start at 5 seconds and go down
});
