function getClickPosition(e) {
	var picture = myWindow.document.getElementById("thing");
	var offset = myWindow.window.pageYOffset || (myWindow.document.documentElement || 
	    myWindow.document.body.parentNode || myWindow.document.body).scrollTop;
    var x = e.clientX - (picture.clientWidth / 2);
    var y = e.clientY + offset - (picture.clientHeight / 2);
     
    picture.style.left = x + "px";
    picture.style.top = y + "px";
}

var myVar = setInterval(function(){ UpdateClock() }, 1000);
function PrintDateAndTime() {
    var currentdate = new Date();
	var amOrPM;
	if (currentdate.getHours() < 12)
	  amOrPM = " AM";
	else 
	  amOrPM = " PM";
	var hours = currentdate.getHours() % 12 || 12;
    var datetime = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" 
      + currentdate.getFullYear() + " " + hours + ":" + currentdate.getMinutes() + ":";
	if (currentdate.getSeconds() < 10)
	  datetime += "0" + currentdate.getSeconds() + amOrPM;
	else
	  datetime += currentdate.getSeconds() + amOrPM;
	return datetime;
}
  
function UpdateClock() {
    var clock = PrintDateAndTime();
	var text = "<u>Current Time:</u> ";
	myWindow.document.getElementById('currentTime').innerHTML = text + clock;
}

function showHex(){
    var h1 = mwWindow.document.querySelector("h1");
    h1.style.color = myWindow.document.querySelector("#color_picker").value;
}

function getRandomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createImageArray() {
	var createImage = function(src) {
		var img   = new Image();
		img.src   = src;
		return img; 
	};

	var images = [];
	images.push(createImage("http://wallpaperlayer.com/img/2015/7/scenery-6382-6657-hd-wallpapers.jpg"));
	images.push(createImage("http://previews.123rf.com/images/alexis84/alexis841505/alexis84150500309/40251787-Beautiful-scenery-of-green-forest-with-picnic-table-and-cottage-Stock-Photo.jpg"));
	images.push(createImage("http://www.pageresource.com/wallpapers/wallpaper/beautiful-summer-scenery.jpg"));
	images.push(createImage("http://3.bp.blogspot.com/-Ue1BNDfjTwE/UPFybkYOckI/AAAAAAAACB0/SfkwREI3KHM/s640/A-Beautiful-Path-Villaviciosa-Asturias-Spain-700x525.jpg"));
	images.push(createImage("https://s-media-cache-ak0.pinimg.com/736x/f8/57/06/f85706c5f5e0b974a533ad6c8d1af258.jpg"));
	images.push(createImage("http://livehdwallpaper.com/wp-content/uploads/2016/02/Beautiful-Scenery-Wallpapers-HD-Pictures.jpg"));
	images.push(createImage("https://s-media-cache-ak0.pinimg.com/originals/d7/c5/c5/d7c5c5607a692944024215b1bfb65d72.jpg"));
	images.push(createImage("https://s-media-cache-ak0.pinimg.com/originals/a2/2a/a6/a22aa63c501c8b010b4865e21b49b950.jpg"));
	images.push(createImage("http://cdn.wallpapersafari.com/46/98/htRVXx.jpg"));
	images.push(createImage("http://eskipaper.com/images/scenery-11.jpg"));
	
	return images;
}