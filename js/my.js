/* SCROLL CHANGE ACTIVE CLASS */
$(document).ready(function(){
let sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  let cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    let top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
      
    if (cur_pos == top) {
        $('home').addClass('active');
        sections.removeClass('active');
    } 
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});   
});

/* ADDING AND REMOVE CLASSES WHEN SCROLLING */
$(document).ready(function(){
$(window).on('scroll',function () {
        // Transition effect for navbar 
          // checks if window is scrolled more than 500px, adds/removes scrolled class
          if($(this).scrollTop() > 300) { 
              $('.topnav').addClass('scrolled');
              $('.hamburgerNav').addClass('scrolled');
              $('#outHamburger').addClass('scrolled');
              $('.scrollUp').addClass('show');
          } else {
              $('.topnav').removeClass('scrolled');
              $('.hamburgerNav').removeClass('scrolled');
              $('#outHamburger').removeClass('scrolled');
              $('.scrollUp').removeClass('show');
          }
});
});

/*
function scrollDown() {
    let position = $(this).scrollTop();
    window.scrollBy(0, 700-position);
}

function hamburgerSlideMenu() {
  $('#outHamburger').slideToggle(500);
};
*/


/* HAMBURGER MENU TOGGLE SCRIPT */
function navToggle(x) {
    
    x.classList.toggle("change");
    
    let nav = document.getElementById("outHamburger");
    let main = document.getElementById("nav");
    let menu = document.getElementsByClassName("menuitems");

	//to close
	if (main.style.height === "275px") {
	main.style.height = "0px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
	};
	} 
	//to open
	else if (main.style.height <= "50px") {
	main.style.height = "275px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
	};
	}
};

/* PRELOAD FADEOUT FUNCTION */
/*
if (document.readyState === "complete") {

$('#preloader').fadeOut('slow',function(){$(this).remove();});

};
*/
function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#preloader', false);
});

$(window).ready(function(){
AOS.init({
    duration: 1200,
    })
});
