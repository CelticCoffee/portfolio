/*global $ */
'use strict';

$(document).ready(function() {
  $('#jotClick').click(function() {
    $('.leftCol').toggle();
    $('.jotDescription').toggle();
    $('#cathedralInfo').hide();
    $('.cathedralDescription').hide();
  });
    $('#cathedralClick').click(function() {
      $('#cathedralInfo').toggle();
      $('.cathedralDescription').toggle();
      $('.leftCol').hide();
    });
});
