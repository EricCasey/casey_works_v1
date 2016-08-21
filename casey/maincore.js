
$(document).ready(function(){  
	
	
	///pre-loading screen
	var readytoanimate = true

  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
    readytoanimate = true;
  });


///// his is the jQuery animation for the top and bottom circles;

  $(function(){
    $('div.bottomcircle').delay(1000).fadeIn(100).animate({"left":"15%"},2000);
});
  $(function(){
    $('div.topcircle').delay(1000).fadeIn(100).animate({"left":"15%"},2000);
});



//start

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

var topbubble = document.getElementById('topcircle')
var bottombubble = document.getElementById('bottomcircle')
var line = document.getElementById('line')

function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 topbubble.style.top = -scrolltop * 1.3 + 70 + 'px'
 bottombubble.style.top = -scrolltop * 1.3 + 70 + 'px'
 line.style.top = -scrolltop * 1.3 + 70 + 'px'
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)


//end



});



  //// Clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + " EST";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


 /// redirects to mobile page if width is == ?

 <!--
  if (screen.width <= 500) {
    window.location = "http://www.casey.works/mobile";
  }
  //-->


// If reloaded jumps to top. COOL!
window.onbeforeunload = function(){
  window.scrollTo(0,0);
}


