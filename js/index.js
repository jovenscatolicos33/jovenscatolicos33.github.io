$(document).ready(function () {
	
	//screen the loading
	$(window).load(function() {
	$(".sections").fadeIn();
	$("#loading").fadeOut();
	//active wow.js 'scroll with animate.css'
	new WOW().init();
	});
	
	//play song when mouseover img contacts
	$(".contacts img").mouseover(function() {playsong();});

	
});

//function for play song
function playsong(){
	document.getElementById("sound").play();
}