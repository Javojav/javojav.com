var bubble = [], B = 75;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);
}

function draw() {
  background(0);
  for (var i = 0; i < bubble.length; i++) {
    bubble[i].display();
    bubble[i].move();
  }
  B = B + 1;
  if (B > 75) {
    B = 1;
    bubble.push(new Bubble());
  }
}

function Bubble() {
  this.x = random(width);
  this.y = height + 50;

  this.move = function() {
    this.y = this.y - 0.5;
    this.x = this.x + random(-0.5, 0.5);
  };

  this.display = function() {
    stroke(255);
    fill(255, 255, 255, 40);
    ellipse(this.x, this.y, 50, 50);
  };
}