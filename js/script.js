
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var content = document.getElementById("content");
var sticky = header.offsetTop;
function myFunction() {
 
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    content.classList.add("hidden")
  } else if(window.pageYOffset <= sticky) {
    header.classList.remove("sticky");
    content.classList.remove("hidden");
  }
}

$(document).ready(function(){
  $('.nav-button').click(function(){
	$('body').toggleClass('nav-open');
  });
});

//fading out script
$('#overlay').fadeOut(2000);