var circleX , circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  circleX = random(width);
  circleY = random(height);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX, circleY, 50, 50);
}

function mousePressed() {
  background(0);
}
