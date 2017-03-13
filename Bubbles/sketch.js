var bubble = [],
  B = 75;
  MoarBubbles = 0,
  fl = 0,
  sk = 1;
 
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function draw() {
  background(0);
  for (var i = 0; i < bubble.length; i++) {
    var j = i;
    bubble[i].display();
    bubble[i].move();
    if (bubble[i].y < -25 || bubble[i].x > width + 25 || bubble[i].y > height + 25) {
      bubble.splice(i, 1);
    }
  }
  B = B + 1;
  if (MoarBubbles === 0) {
    if (B > 50) {
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
    sk = 0;
  }
  if (key == 2) {
    sk = 1;
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
  if (key == 7) {
    saveFrames("out", "png", 1, 1);
  }
}

function Bubble() {
  this.g = random(20, 75);
  this.x = random(width);
  this.y = height + 25;
    this.colorr = random(255);
    this.colorg = random(255);
    this.colorb = random(255);


  this.move = function() {
    this.y = this.y - 0.5;
    this.x = this.x + random(-0.5, 0.5);
  };

  this.display = function() {
    if (sk === 0) {
      stroke(255);
    }
    if (sk === 1) {
      stroke(this.colorr, this.colorg, this.colorb);
    }
    if (fl === 1) {
      fill(this.colorr, this.colorg, this.colorb, 50);
    }
    if (fl === 0) {
      noFill();
    }
    ellipse(this.x, this.y, this.g, this.g);
  };
}
