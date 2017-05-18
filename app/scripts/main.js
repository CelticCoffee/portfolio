/*global $ */
'use strict';

$(document).ready(function() {

  var page = document.URL;
  console.log(page);
    if(page === "http://localhost:9000/services.html"){
      var contactform = document.getElementById("contactForm");
      contactform.setAttribute('action', '//formspree.io/' +
      'wendygoodwin' + '@' + 'mac' + '.' + 'com');
    }
    else {
      console.log("no contact form")
    }


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
      $('.elvonQuote').toggle('slow');
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


      //   contactform.setAttribute('action', '//formspree.io/' +
      //   'wendygoodwin' + '@' + 'mac' + '.' + 'com');
      //
      //
      //   console.log("no contact form");
      // }
  });
