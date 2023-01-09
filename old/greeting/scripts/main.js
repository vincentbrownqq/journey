var speed = 50;
var index = 0;
function type(text) {
	if (index < text.length) {
		document.getElementById('text').innerHTML += text.charAt(index);
		index++;
	}
	setTimeout(function() { type(text); }, speed);
