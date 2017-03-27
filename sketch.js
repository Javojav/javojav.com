function setup() {
	noCanvas()
	P = createP("©Javi "+year());
	P.position(window.innerWidth/2-37,window.innerHeight-40)
	P.style("color","white");
	P.style("font-size","15px")
}

function windowResized() {
	P.position(window.innerWidth/2-37,window.innerHeight-40)
}