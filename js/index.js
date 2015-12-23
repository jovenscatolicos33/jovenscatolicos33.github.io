$(document).ready(function () {
	
	//screen the loading
	$(window).load(function() {
	$(".sections").fadeIn();
	$("#loading").fadeOut();

	//active wow.js 'scroll with animate.css'
	new WOW().init();

	//controll scroll
	$("#up").click(function() {$('html, body').animate({scrollTop:0}, 'slow');});
	$("#down").click(function() {$('html, body').animate({scrollTop:3500}, 'slow');});
	});

	//play song when mouseover img contacts
	$(".contacts img").mouseover(function() {playsong();});

	//controll show scroll
	window.onscroll = function () {
		if (window.scrollY < 100)
			$("#up").fadeOut();
		else
			$("#up").fadeIn();

		if (window.scrollY > 3100)
			$("#down").fadeOut();
		else
			$("#down").fadeIn();
	}
	
});

//function for play song
function playsong(){
	document.getElementById("sound").play();
}