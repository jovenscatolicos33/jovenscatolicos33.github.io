$(document).ready(function () {
	
	//screen the loading
	$(window).load(function() {
	$("#loading").fadeOut();
	});
	
	//play song when mouseover img contacts
	$(".contacts img").mouseover(function() {playsong();});

	//active wow.js 'scroll with animate.css'
	new WOW().init();
});

//function for play song
function playsong(){
	document.getElementById("sound").play();
}