import {$, jQuery} from 'jquery';
window.$ = $;
window.jQuery = jQuery;

function showAvailable(text) {
  const fixedText = text.split('').filter(char => char == /\w/gi);
  return alert(fixedText);
}

showAvailable('Thomas Girgenti is my Lover');

/*
$(document).ready(function () {
  $('#submit-button').click(function () {
    const inputText = $('#text-input').val();
    showAvailable(inputText);
  });
});
*/




