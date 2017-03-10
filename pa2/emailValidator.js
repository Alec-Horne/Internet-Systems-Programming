function ValidateEmail(inputText) {
	var mailformat = /[`~!#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
	document.getElementById("emailNotifier").innerHTML = "";
	if(!inputText.value.match(mailformat)) {
		document.myForm.email.focus();
		return true;
    } else {
		var str = inputText.value.replace(mailformat, '*');
		alert('You have entered an invalid email address! Check the striked characters below the input box.');
		emailNotifier(str, inputText);
		document.myForm.email.focus();
		return false;
    }
}

function emailNotifier(str, inputText) {
	var atSign = false;
	for(var x = 0; x < str.length; x++) {
		if(str.charAt(x) == "*")
			document.getElementById("emailNotifier").innerHTML += inputText.value.charAt(x).strike();
		else if(str.charAt(x) == "@"){
			if(!atSign) {
				document.getElementById("emailNotifier").innerHTML += inputText.value.charAt(x);
				atSign = true;
			}
			else
				document.getElementById("emailNotifier").innerHTML += inputText.value.charAt(x).strike()
		}
		else
			document.getElementById("emailNotifier").innerHTML += inputText.value.charAt(x);
	}
	inputText.value = '';
}

function ValidateEmailAuto(inputText) {
	var mailformat = /[`~!#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
	if(!inputText.value.match(mailformat)) {
		document.myForm.autoEmail.focus();
		return true;  
    } else {
		alert('You have entered an invalid email character. Please try again.');
		inputText.value = '';
		document.myForm.AutoEmail.focus();
		return false;
    }
}