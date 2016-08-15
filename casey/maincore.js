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


// Overcomplitacted shit for the color changing line

$(window).scroll(function() {
		
		//gets height of #theTop element for you
	  var subNavHeight = $("#subNav").outerHeight()
	  var scrollPoint = $("#theTop").height();
		var scrollPoint2 = (scrollPoint + $("#section2").outerHeight()) - subNavHeight;	
		var scrollPoint3 = (scrollPoint2 + $("#section3").outerHeight());
	
    if ($(this).scrollTop() > scrollPoint && $(this).scrollTop() < scrollPoint2){
			  $('#subNav').removeClass();
        $('#subNav').addClass("sticky");
				$('#subNav').addClass("red");
    }
	
	 else if ($(this).scrollTop() > scrollPoint2 && $(this).scrollTop() < scrollPoint3){  
		 		$('#subNav').removeClass();
        $('#subNav').addClass("sticky");
		    $('#subNav').addClass("green");
    }
	
	 else if ($(this).scrollTop() > scrollPoint3 ){  
		   $('#subNav').removeClass();
        $('#subNav').addClass("sticky");
		 		$('#subNav').addClass("blue");
    }

    else {
        $('#subNav').removeClass();
    }
});


///pre-loading screen

var readytoanimate = true

	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
		readytoanimate = true;
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


