var myWindow;

function openWindow() {
    myWindow = window.open("", "myWindow", "width=700,height=500");
	myWindow.document.write('<br>');
}

function closeWindow() {
    myWindow.close();
}

function addTitle(input) {
	if (input.value == "")
		myWindow.document.title = 'My new webpage!';
	else
		myWindow.document.title = input.value;
}

function addHeader(input) {
	if (input.value == "")
		myWindow.document.write('<h1 style="text-align: center; font-size: 48px">My New Webpage</h1>');
	else
		myWindow.document.write('<h1 style="text-align: center; font-size: 48px">' + input.value + '</h1>');
}

// search the string it is added to and if it is not found then add it to the page, else do nothing
function addAnimatedImage() {
	myWindow.document.write('<img id="thing" src="http://users.softpress.com/tim/red-ball.png"style="position: absolute; left: 47%; ' +
		'top: 31%; height: 70px; width: 70px; transition: left .7s ease-in, top .7s ease-in; z-index: -9">');
	myWindow.document.querySelector("html").addEventListener("click", getClickPosition, false);
}

function addDateAndTime() {
	myWindow.document.write("<p id='currentTime'><u>Current Time:</u></p>");
	UpdateClock();
}

function addTextColorPicker() {
	myWindow.document.write('Choose a color to change the below text color:<input id="color_picker" type="color" onchange="showHex();">' + 
		'<h2>Pick a color and watch me change!</h2>');
	myWindow.document.write('<script>function showHex(){var h1 = document.querySelector("h2");h1.style.color = document.querySelector("#color_picker").value;}</script>');
}

function addCircleToSquareAnimation() {
	myWindow.document.write('<div style="height: 250px; width: 250px; margin: 0 auto; background-color: red; animation-name: stretch; animation-duration: 1.5s; ' + 
		'animation-timing-function: ease-out; animation-delay: 0; animation-direction: alternate; animation-iteration-count: infinite; animation-fill-mode: none; ' +
		'animation-play-state: running;"></div>');
	myWindow.document.write('<style>@keyframes stretch { 0% {transform: scale(.3);background-color: red;border-radius: 100%;}  50% {background-color: orange;}' +
		'100% {transform: scale(1.5);background-color: yellow;}}</style>');
}

function addAnimatedText(input) {
	if (input.value == "")
		myWindow.document.write('<marquee behavior="left" scrollamount="12"><font size="10">I am animated text. Watch me move!</font></marquee>');
	else
		myWindow.document.write('<marquee behavior="left" scrollamount="12"><font size="10">' + 
		input.value + '</font></marquee>');
}

function addButton() {
	myWindow.document.write('<input type="button" style="font-size: 14px; height: 35px; width: 170px" ' +
		'value="My Button" id="newButton" onclick="buttonClicked()">');
	myWindow.document.write("<script>function buttonClicked(){document.getElementById('newButton').value = 'You clicked me!';}</script>");
}

function addTextbox() {
	myWindow.document.write('<input type="text" style="font-size: 14px; height: 40px; width: 230px" ' +
		'value="Enter text here..." id="newTextbox">');
}

function addHorizontalRule() {
	myWindow.document.write('<hr>');
}

function addLineBreak() {
	myWindow.document.write('<br>');
}

function addFlashingText(input) {
	if (input.value == "") {
		myWindow.document.write('<p style="font-style:bold; width:100%; margin:0 auto; text-align: center; color:#313131; font-size:40px; ' + 
			'font-weight: bold; -webkit-animation: colorchange 20s infinite alternate;">Watch me change colors!</p>');
		myWindow.document.write('<style>@-webkit-keyframes colorchange {0% {color: red;}10% {color: blue;}20% {color: green;}30% {color: yellow;}40% {color: pink;}' +
			'50% {color: purple;}60% {color: orange;}70% {color: gray;}80% {color: maroon;}90% {color: darkgreen;}100% {color: black;}}</style>');
	} else {
		myWindow.document.write('<p style="font-style:bold; width:100%; margin:0 auto; text-align: center; color:#313131; font-size:40px; ' + 
			'font-weight: bold; -webkit-animation: colorchange 20s infinite alternate;">' + input.value + '</p>');
		myWindow.document.write('<style>@-webkit-keyframes colorchange {0% {color: red;}10% {color: blue;}20% {color: green;}30% {color: yellow;}40% {color: pink;}' +
			'50% {color: purple;}60% {color: orange;}70% {color: gray;}80% {color: maroon;}90% {color: darkgreen;}100% {color: black;}}</style>');
	}
}

function addBackgroundColorChanger() {
	myWindow.document.write('Choose a color to change the background color:<input id="BG_color_picker" type="color" onchange="changeBackgroundColor();">');
	myWindow.document.write('<script>function changeBackgroundColor(){document.body.style.backgroundColor = document.querySelector("#BG_color_picker").value;}</script>');
}

function addYoutubeVideo(input) {
	if (input.value == "")
		myWindow.document.write('<iframe width="570" height="330" src="https://www.youtube.com/embed/zl4CCLG2x0g"></iframe>');
	else
		myWindow.document.write('<iframe width="570" height="330" src="' + input.value + '"></iframe>');
}

function addRandomImage(input) {
	if (input.value == "") {
		var imageArray = createImageArray();
		var index = getRandomInteger(0, 9);
		myWindow.document.write('<img src="' + imageArray[index].src + '" width="300" height="300">');
	} else {
		myWindow.document.write('<img src="' + input.value + '" width="300" height="300">');
	}
}

function addCanvas() {
	myWindow.document.write('<canvas id="myCanvas" width="350" height="200" style="border:1px solid #d3d3d3;">' +
		'Your browser does not support the HTML5 canvas tag.</canvas>');
	myWindow.document.write('<script>var c = document.getElementById("myCanvas");var ctx = c.getContext("2d");ctx.moveTo(0,0);' +
		'ctx.lineTo(350,200);ctx.stroke();var cty = c.getContext("2d");cty.moveTo(350,0);cty.lineTo(0,200);cty.stroke();</script>');
}

function addAdditionCalculator() {
	myWindow.document.write('<br><input type="text" style="font-size: 14px; height: 40px; width: 230px" ' +
		'id="tb1">  +  <input type="text" style="font-size: 14px; height: 40px; width: 230px" ' +
		'id="tb2"><input type="button" style="font-size: 14px; height: 35px; width: 170px" ' +
		'value="Add Numbers" id="newButton" onclick="addNumbers()">   ');
	myWindow.document.write('<script>function addNumbers() {var a = document.getElementById("tb1").value;var b = document.getElementById("tb2").value;document.write(parseInt(a)+parseInt(b));}</script>');
}

function addRangeSlider() {
	myWindow.document.write('<label for="fader" style="font-size: 20px">Range</label><input type="range" min="0" max="20" value="10" id="fader">');
}

function addProgressBar() {
	myWindow.document.write('<div class="meter"><span style="width:100%;"><span class="progress" id="progress">' +
	'</span><font size=25>0%</font></span></div>');
	myWindow.document.write('<style>.meter { height: 22px;position: relative;background: #f3efe6;overflow: hidden;}' + 
		'.meter span {display: block;height: 100%;}.progress {background-color: #91f27b;-webkit-animation: progressBar ' +
		'5s ease-in-out infinite;-webkit-animation-fill-mode:both;-moz-animation: progressBar 5s ease-in-out infinite;' +
		'-moz-animation-fill-mode:both; }@-webkit-keyframes progressBar {0% { width: 0; }100% { width: 100%; }}' +
		'@-moz-keyframes progressBar {0% { width: 0; }100% { width: 100%; }}</style>');
}

function addFixedNavBar() {
	myWindow.document.write('<style>ul {list-style-type: none;margin: 0;padding: 0;overflow: hidden;' +
		'background-color: #333;position: fixed;top: 0;width: 100%;}li {float: left;}li a {display: block;' +
		'color: white;text-align: center;padding: 14px 16px;text-decoration: none;}li a:hover:not(.active)' +
		'{background-color: gray;}</style>');
	myWindow.document.write('<ul><li><a href="#home">Home</a></li><li><a href="#news">News</a>' +
		'</li><li><a href="#contact">Contact</a></li><li><a href="#about">About</a></li></ul>');
}
