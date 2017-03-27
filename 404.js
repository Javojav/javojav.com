function setup() {
	button = createButton("javojav.github.io");
	button.position(window.innerWidth / 2 - 175);
	button.style("font-family", "'Rajdhani', sans-serif");
	button.style("font-size", "50px");
	button.mousePressed(function() {
		window.location = "http://javojav.github.io"
	});
}

function windowResized() {
	button.position(window.innerWidth / 2 - 180);
}