/*------------------SIDEBAR------------------------------*/
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });
/*------------------SIDEBAR------------------------------*/
/*-----------------LOGIN---------------------------------*/
var create_acc=document.querySelector(".create_acc");
var login_acc=document.querySelector(".login_acc");
var s_form=document.querySelectorAll(".s_form");
var login_button=document.querySelector(".login_button");
var signin_form_input=document.querySelectorAll(".signin_form input");

var signin_eye_click = document.querySelector(".fa-eye-slash");
var signin_type = document.querySelector(".signin_pass");
var set_signin_eye = document.querySelector(".fa-eye-slash");

let formnumber=0;

create_acc.addEventListener('click',function(){
   formnumber++;
   create();
});

login_acc.addEventListener('click',function(){
   formnumber--;
   create();
});
/*------------------------LOGIN-------------------------*/


