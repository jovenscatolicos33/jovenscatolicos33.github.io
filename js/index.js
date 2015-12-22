$(document).ready(function () {
	
	$("#body").fadeIn();
	$("#loading").fadeOut();
	$(".contacts img").mouseover(function() {playsong();});
});

function playsong(){
	document.getElementById("sound").play();
}