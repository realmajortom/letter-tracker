var liveLetters = [];
var initialLetters = [];
var usedLetters = [];

function showAvailable(someArr) {
  const joinArr = someArr.join(' ');
  $('#avail-letters').html(joinArr);
}

function updateLiveLetters() {
  for (let i = 0; i < usedLetters.length; i += 1) {
    const matchIndex = liveLetters.indexOf(usedLetters[i]);
    if (matchIndex >= 0) {
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


$(document).ready(function () {
  $('#submit-button').click(function () {
    initialLetters = makeArray($('#text-input').val());
    liveLetters = initialLetters;
    showAvailable(liveLetters);
    $('#input-form')[0].reset();
  });
});

$(document).ready(function () {
  $('#new-text').change(function () {
    usedLetters = makeArray($('#new-text').val());
    updateLiveLetters();
  });
});
