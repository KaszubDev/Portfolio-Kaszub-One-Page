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

/* HAMBURGER MENU TOGGLE SCRIPT */
function navToggle(x) {
    
    x.classList.toggle("change");
    
    let nav = document.getElementById("outHamburger");
    let main = document.getElementById("nav");
    let menu = document.getElementsByClassName("menuitems");
    let arrow = document.getElementsByClassName("downArrow");

	//to close
	if (main.style.height === "275px") {
    arrow[0].style.zIndex="1000";
	main.style.height = "0px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="0.0";
	menu[i].style.marginTop="100px";
    menu[i].style.pointerEvents = "none";
	};
	} 
	//to open
	else if (main.style.height <= "50px") {
    arrow[0].style.zIndex="990";
	main.style.height = "275px";
    	let i = 0;
    	for (i = 0; i < menu.length; i++){
	menu[i].style.opacity="1.0";
	menu[i].style.marginTop="0px";
    menu[i].style.pointerEvents = "auto";
	};
	}
};

/* PRELOAD FADEOUT FUNCTION */

$(window).on("load", function () {
     
$('#preloader').fadeOut('slow',function(){$(this).remove();});

});


$(window).ready(function(){
AOS.init({
    duration: 1200,
    })
});
