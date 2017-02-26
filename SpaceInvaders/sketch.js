var alien = [],
  shot = [],
  a = 0,
  dirx = 0.5,
  stop = 0,
  px, level = 0;

function setup() {
  createCanvas(750, 750);
  background(0);
  px = width / 2;
  for (var i = 0; i < 9 * 8; i++) {
    alien.push(new Alien());
  }
  for (var y = 1; y < 9; y++) {
    for (var x = 1; x < 10; x++) {
      alien[a].pos(x * 75, y * 75);
      a++
    }
  }
}

function draw() {
  background(0);
  if (alien.length < 1) {
    reset();
  }
  if (stop == 0) {
    player();
    for (var i = alien.length - 1; i > -1; i--) {
      alien[i].display();
      alien[i].move();
      alien[i].wall();
    }
    for (var i = shot.length - 1; i > -1; i--) {
      shot[i].display();
      shot[i].move();
      shot[i].hit();
      if (shot[i].y < 0) {
        shot.splice(i, 1);
      }
    }
    diry = 0;
  } else {
    background(0);
  }
}

function player() {
  fill(255);
  beginShape();
  vertex(px, height);
  vertex(px + 25, height - 30);
  vertex(px + 50, height);
  endShape(CLOSE);
  if (keyIsDown(LEFT_ARROW)) {
    px = px - 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    px = px + 3;
  }
}

function Alien() {
  if (level == 0) {
    this.dam = 1;
  } else {
    this.dam = 0 - (level - 1);
  }
  this.pos = function(x, y) {
    this.x = x;
    this.y = y;
  };
  this.display = function() {
    if (level == 0) {
      fill(0, 255, 0);
    }
    if (level > 0 && this.dam < 1) {
      fill(0, 255, 0);
    }
    if (level > 0 && this.dam == 1) {
      fill(255, 0, 0);
    }
    ellipse(this.x, this.y, 50, 50);
  };
  this.move = function() {
    this.x = this.x + dirx;
  };
  this.wall = function() {
    if (this.x < 25 || this.x > width - 25) {
      dirx = dirx * -1;
      for (var a = 0; a < alien.length; a++) {
        alien[a].y = alien[a].y + 25;
        if (alien[a].y > height) {
          stop = 1;
        }
      }
    }
  };
}

function Shot() {
  this.x = px + 25;
  this.y = height - 35;
  this.s = 1;
  this.display = function() {
    if (this.s == 1) {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 10, 10);
    }
  };
  this.move = function() {
    this.y = this.y - 10;
  };
  this.hit = function() {
    for (var q = alien.length - 1; q > -1; q--) {
      if (this.s == 1) {
        if (this.y > alien[q].y - 25 && this.y < alien[q].y + 25 && this.x > alien[q].x - 25 && this.x < alien[q].x + 25) {
          if (alien[q].dam == 1) {
            alien.splice(q, 1);
          } else {
            alien[q].dam++;
          }
          this.s = 0;
        }
      }
    }
  };
}

function reset() {
  px = width / 2;
  a = 0;
  level++;
  for (var i = 0; i < 9 * 8; i++) {
    alien.push(new Alien());
  }
  for (var y = 1; y < 9; y++) {
    for (var x = 1; x < 10; x++) {
      alien[a].pos(x * 75, y * 75);
      a++
    }
  }
}

function keyPressed() {
  if (keyCode === 32 && shot.length < 3) {
    shot.push(new Shot())
  }
}

function mousePressed() {
  alien.splice(0, 10);
}