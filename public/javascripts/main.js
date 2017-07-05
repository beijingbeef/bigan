'use strict';

$(function () {

  // Adds event listener for clickable cards.
  $('.card[data-url]').on('click', function () {
    $(location).attr('href', $(this).data('url'));
  });
});