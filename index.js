var globals = {
  liveLetters: [],
  initialLetters: [],
  usedLetters: [],
  matchedLetters: [],
  matchIndexHistory: []
};

var liveLetters = [];
var initialLetters = [];
var usedLetters = [];
var matchedLetters = [];
var matchIndexHistory = [];

function makeArray(string) {
  return string.split('')
    .filter(char => /[\w]/gi.test(char))
    .map(char => char.toLowerCase());
}

function showAvailable(someArr) {
  const joinArr = someArr.join('  ');
  $('#avail-letters').html(joinArr);
}

function updateLiveLetters() {
  matchIndexHistory.unshift(liveLetters.indexOf(usedLetters[0]));
  if (matchIndexHistory[0] >= 0) {
    matchedLetters.unshift(usedLetters[0]);
    liveLetters.splice(matchIndexHistory[0], 1);
  }
  showAvailable(liveLetters);
}


// display intial user input
$(document).ready(function () {
  $('#submit-button').click(function () {
    initialLetters = makeArray($('#text-input').val());
    liveLetters = initialLetters.filter(char => /[\w]/gi.test(char));
    showAvailable(liveLetters);
    $('#input-form')[0].reset();
  });
});

// update liveLetters with 2nd input. show liveLetters
$(document).ready(function () {
  $('#new-text').keyup(function (event) {
    const inputVal = event.key;
    if (inputVal == 'Backspace' && matchIndexHistory[0] >= 0) {
      liveLetters.splice(matchIndexHistory[0], 0, matchedLetters[0]);
      matchIndexHistory.shift();
      usedLetters.shift();
      matchedLetters.shift();
      showAvailable(liveLetters);
    } else {
      usedLetters.unshift(inputVal);
      updateLiveLetters();
    }
  });
});

$(document).ready(function () {
  $('#clear-all').click(function () {
    liveLetters = [];
    initialLetters = [];
    usedLetters = [];
    matchedLetters = [];
    matchIndexHistory = [];
    showAvailable(liveLetters);
  });
});
