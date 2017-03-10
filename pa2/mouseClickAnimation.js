var picture = document.querySelector("#thing");
var container = document.querySelector("html");
container.addEventListener("click", getClickPosition, false);
 
function getClickPosition(e) {
	var offset = window.pageYOffset || (document.documentElement || 
	    document.body.parentNode || document.body).scrollTop;
    var x = e.clientX - (picture.clientWidth / 2);
    var y = e.clientY + offset - (picture.clientHeight / 2);
     
    picture.style.left = x + "px";
    picture.style.top = y + "px";
}