var pool = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
var criteriaMet = false;
var password;
while (!criteriaMet) {
	password = "";
	for (var i = 0; i < 16; i++) {
		password += pool.charAt(Math.floor(csrng() * (pool.length - 1 - 1)));
	}
	if (password.match(new RegExp("[a-z]", "g")) && password.match(new RegExp("[0-9]", "g")) && password.match(new RegExp("[A-Z]", "g"))) {
		criteriaMet = true;
	}
}

function csrng() {
	var buf = new Uint8Array(1);
	(window.crypto || window.msCrypto).getRandomValues(buf);
	return buf[0] / 256;
}
document.getElementById("password").innerText = password;

if (navigator.userAgent.indexOf("Mac") != -1) {
	document.getElementById("copyText").innerHTML = "Press &#8984;+C to copy to clipboard.";
}
document.getElementById("password").select();
document.onkeydown = function(e) {
	if (navigator.userAgent.indexOf("Mac") == -1) {
		if (e.ctrlKey && e.keyCode === 67) {
			document.getElementById("copyText").innerHTML = "The password has been copied.";
		}
	} else {
		if (e.metaKey && e.keyCode === 67) {
			document.getElementById("copyText").innerHTML = "The password has been copied.";
		}
	}
};
