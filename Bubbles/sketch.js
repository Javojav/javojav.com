var bubble = [],
  B = 75,
  colors = 0,
  MoarBubbles = 0,
  fl = 0;

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
  if (MoarBubbles === 0) {
    if (B > 75) {
      B = 1;
      bubble.push(new Bubble());
    }
  }
  if (MoarBubbles === 1) {
    if (B > 1) {
      B = 1;
      bubble.push(new Bubble());
    }
  }
}

function keyPressed() {
  if (key == 1) {
    colors = 0;
  }
  if (key == 2) {
    colors = 1;
    fl = 1;
  }
  if (key == 3) {
    MoarBubbles = 1;
  }
  if (key == 4) {
    MoarBubbles = 0;
  }
  if (key == 5) {
    fl = 1;
  }
  if (key == 6) {
    fl = 0;
  }
}

function Bubble() {
  this.x = random(width);
  this.y = height + 50;
  if (colors === 1) {
    this.colorr = random(255);
    this.colorg = random(255);
    this.colorb = random(255);
  }
  if (colors === 0) {
    this.colorr = 255;
    this.colorg = 255;
    this.colorb = 255;
  }

  this.move = function() {
    this.y = this.y - 0.5;
    this.x = this.x + random(-0.5, 0.5);
  };

  this.display = function() {
    stroke(255);
    if (fl === 1) {
      fill(this.colorr, this.colorg, this.colorb, 50);
    }
    if (fl === 0) {
      noFill();
    }
    ellipse(this.x, this.y, 50, 50);
  };
}
