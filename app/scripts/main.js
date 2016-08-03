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

    $('.moreTextTrigger').click(function(){
      $('.moreText').toggle('slow');
    });

    $('.cathedralTextShow').click(function(){
      $('.moreCathedral').toggle('slow');
      $('.cathedralSlide2').toggle('slow');
      $('.cathedralTextShow').toggle('slow');
      $('.backToCathedral').toggle('slow');
    });

    $('.backToCathedral').click(function(){
      $('.moreCathedral').toggle('slow');
      $('.cathedralSlide2').toggle('slow');
      $('.cathedralTextShow').toggle('slow');
      $('.backToCathedral').toggle('slow');
    });

    $('.topBtn').click(function(){
      window.scrollTo(0, 14);
      console.log('snowman');
    });
});
