var liveLetters = [];
var initialLetters = [];
var usedLetters = [];
var removedLetters = [];

function showAvailable(someArr) {
  const joinArr = someArr.join(' ');
  $('#avail-letters').html(joinArr);
}

function updateLiveLetters() {
  for (let i = 0; i < usedLetters.length; i += 1) {
    const matchIndex = liveLetters.indexOf(usedLetters[i]);
    if (matchIndex >= 0) {
      removedLetters.unshift(liveLetters[matchIndex]);
      liveLetters.splice(matchIndex, 1);
    }
  }
  showAvailable(liveLetters);
}

function makeArray(string) {
  return string.split('')
    .filter(char => /[\w]/gi.test(char))
    .map(char => char.toLowerCase());
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
    if (event.key == 'Backspace') {
      liveLetters.push(removedLetters[0]);
      removedLetters.shift();
      showAvailable(liveLetters);
    } else {
      usedLetters = makeArray($('#new-text').val());
      updateLiveLetters();
    }
  });
});
