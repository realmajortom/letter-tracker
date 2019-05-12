var liveLetters = [];

function showAvailable(text) {
  const fixedText = text.split('')
    .filter(char => /[\w]/gi.test(char))
    .map(char => char.toLowerCase());
  liveLetters = fixedText;
  $('#avail-letters').html(liveLetters.join(' '));
}

$(document).ready(function () {
  $('#submit-button').click(function () {
    showAvailable($('#text-input').val());
    $('#input-form')[0].reset();
  });
});

function updateLiveLetters(text) {
  return alert(text); // update later
}

$(document).ready(function () {
  $('#new-text').change(function () {
    updateLiveLetters($('#new-text').val());
  });
});


