 var circleX , circleY;
function setup() {
  createCanvas(window.innerWidth-20,window.innerHeight-20);
  background(0);
}

function draw() {
  circleX=random(width);
  circleY=random(height);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX, circleY, 50, 50);
}

function mousePressed() {
   createCanvas(window.innerWidth,window.innerHeight);
     background(0);
}
