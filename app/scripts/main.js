/*global $ */
'use strict';

$(document).ready(function() {

  function Home(){
    this.page = document.URL;
    this.contactForm = document.getElementById('contactForm');
    this.topBtn = document.querySelector('.topBtn');
  }


  Home.prototype.init = function() {
    this.bindEvents();
    this.activeContact();
    this.goToTop();
  };


  Home.prototype.bindEvents = function(){
    this.topBtn.addEventListener('click', this.goToTop.bind(this), false);
  };

  Home.prototype.activeContact = function(){
    if(this.page === 'http://www.wendygoodwin.io/services.html'){
      this.contactForm.setAttribute('action', '//formspree.io/' +
      'wendygoodwin' + '@' + 'mac' + '.' + 'com');
    }
    else {
      console.log('no contact form');
    }
  };

  Home.prototype.goToTop = function(){
    window.scrollTo(0, 14);
  };


var indexPage = new Home();
indexPage.init();


  });
