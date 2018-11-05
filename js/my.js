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
      
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
      
    if (cur_pos == 0) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        
        $('#home').addClass('active');
        nav.find('a[href="#home"]').addClass('active');
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
    let projectItems = document.getElementsByClassName("projectItems");
    let formIndex = document.getElementsByClassName("formIndex");

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

/* HAMBURGER CLOSE WHEN CLICK OUTSIDE */

$(window).ready(function(){
    let container = document.getElementById('nav');
    let hamburgerIcon = document.getElementsByClassName('hamburgerIcon')[0];
    
    document.addEventListener('click', function( event ) {
    if (container !== event.target && !container.contains(event.target) && !hamburgerIcon.contains(event.target) && container.style.height === "275px") {
    navToggle(hamburgerIcon);
    }
}); 
});

/* PRELOAD FADEOUT FUNCTION */

$(window).on("load", function () {
     
$('#preloader').fadeOut('slow',function(){$(this).remove();});

});

// INITIALIZE AOS ANIMATION

$(window).ready(function(){
AOS.init({
    duration: 1200,
    })
});

// INITIALIZE SLICK SLIDER
/*
$(document).ready(function(){
  $('.skill-icons-slider').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: true,
   focusOnSelect: true
 });
});
*/
/*
$(document).ready(function(){
    var bar = new ProgressBar.Circle(progressBar, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 3000,
            color: '#eee',
            trailColor: '#FFEA82',
            trailWidth: 1,
            });
    bar.animate(1.0);
});
*/




