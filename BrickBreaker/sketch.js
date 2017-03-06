var x, y, l, bx, by, g, c, player = [],
  stop = 0,
  brickx, bricky,
  brick = [],
  ball = [];

function setup() {
  createCanvas(780, 550);
  background(100);
  by = height - 100;
  bx = width / 2;
  var r = random(1, 2);
  r = round(r);
  layout(r);
  for (var a = 0; a < 1; a++) {
    player.push(new Player());
  }
  for (var b = 0; b < 1; b++) {
    ball.push(new Ball());
  }
  for (var i = 0; i < g; i++) {
    brick.push(new Brick());
  }
  layout2(r);
}

function draw() {
    if (brick.length < 1) {
     x, y, l, bx, by, g, c, player = [],
      stop = 0,
      brickx, bricky,
      brick = [],
      ball = [];
    by = height - 100;
    bx = width / 2;
    var r = random(1, 2);
    r = round(r);
    layout(r);
    for (var a = 0; a < 1; a++) {
      player.push(new Player());
    }
    for (var b = 0; b < 1; b++) {
      ball.push(new Ball());
    }
    for (var i = 0; i < g; i++) {
      brick.push(new Brick());
    }
    layout2(r);
  }
  background(100);
  for (var a = 0; a < player.length; a++) {
    player[a].display();
  }
  for (var b = 0; b < ball.length; b++) {
    ball[b].display();
    ball[b].move();
    ball[b].hit();
  }
  for (var i = brick.length - 1; i > -1; i--) {
    brick[i].display();
    brick[i].hit();
  }
  if (stop === 1) {
    background(0);
  }
}

function Brick() {
  this.display = function() {
    fill(150, 80, 30);
    rect(this.x, this.y, 60, 20);
  };
  this.hit = function() {
    for (var q = brick.length - 1; q > -1; q--) {
      if (bx > brick[q].x && bx < brick[q].x + 60 && by > brick[q].y && by < brick[q].y + 20) {
        brick.splice(q, 1);
        ball[0].diry = ball[0].diry * (-1) + 1;
        ball[0].dirx = ball[0].dirx * (-1) + 1;
      }
    }
  };
}

function layout(l) {
  if (l === 1) {
    g = 208;
  }
  if (l === 2) {
    g = 27 * 2;
  }
}

function layout2(l) {
  c = 0;
  if (l === 1) {
    for (var h = 1; h < 17; h++) {
      for (var w = 0; w < g / 16; w++) {
        brick[c].x = w * 60;
        brick[c].y = h * 20;
        c++;
      }
    }
  }
  if (l === 2) {
    for (var c = 0; c < g / 2; c++) {
      brick[c].y = c * 20 + 5;
      brick[c].x = c * 27 + 5;
    }
    for (c = 0; c < g / 2; c++) {
      brick[c + g / 2].y = c * 20 + 5;
      brick[c + g / 2].x = (width - 65) - (c * 27 + 5);
    }
  }
}

function Player() {
  this.display = function() {
    x = mouseX - 30;
    y = height - 25;
    fill(255);
    rect(x, y, 80, 10);
  };
}

function Ball() {
  this.dirx = random(-3, 3);
  this.diry = random(3);
  this.display = function() {
    fill(255);
    ellipse(bx, by, 15, 15);
  };
  this.move = function() {
    bx = bx + this.dirx;
    by = by + this.diry;
  };
  this.hit = function() {
    if (bx > width - 7) {
      this.dirx = random(-3, 1);
    }
    if (bx < 7) {
      this.dirx = random(1, 3);
    }
    if (by < 7) {
      this.diry = random(1, 3);
    }
    if (bx < x + 80 && bx > x && by > y && by < y + 15) {
      this.diry = random(-3, -1);
      this.dirx = random(-3, 3);
      while (by < y) {
        y--;
      }
    }
    if (by > height + 15) {
      stop = 1;
    }
  };
}
