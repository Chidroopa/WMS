var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



var modal0=document.getElementsByClassName("modal")[0];
var btn0=document.getElementsByClassName("modalbutton")[0];
var span0=document.getElementsByClassName("close")[0];

btn0.onclick = function() {
	modal0.style.display = "block";
}
span0.onclick = function() {
	modal0.style.display = "none";
}


var modal1=document.getElementsByClassName("modal")[1];
var btn1=document.getElementsByClassName("modalbutton")[1];
var span1=document.getElementsByClassName("close")[1];

btn1.onclick = function() {
	modal1.style.display = "block";
}
span1.onclick = function() {
	modal1.style.display = "none";
}


window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
	if (event.target == modal0) {
		modal0.style.display = "none";
	}
}


