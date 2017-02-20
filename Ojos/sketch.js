var bubble = [],
  B = 75;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
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
  this.colorr = random(255);
  this.colorg = random(255);
  this.colorb = random(255);

  this.move = function() {
    this.y = this.y - 0.5;
  };

  this.display = function() {
    stroke(255);
    fill(255);
    ellipse(this.x, this.y, 50, 50);
    fill(this.colorr, this.colorg, this.colorb);
    ellipse(this.x, this.y, 30, 30);
    fill(0);
    ellipse(this.x, this.y, 15, 15);
  };
}