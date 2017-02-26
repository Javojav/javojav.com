var head = [],
  body = [],
  bodyx = [],
  bodyy = [],
  stop = 0;

function setup() {
  createCanvas(600, 600);
  background(0);
  head.push(new Head());
  body.push(new Body());
}

function draw() {
  background(0);
  if (stop == 0) {
    for (var i = 0; i < head.length; i++) {
      head[i].display();
      head[i].move();
      head[0].food();
    }
  }
  if (stop == 1) {

  }
  if (stop == 0) {
    for (var l = 0; l < body.length; l++) {
      body[l].display();
    }
  }
  textSize(20);
  fill(255);
  text("©Javi", width - 55, height - 10);
}

function Head() {
  this.x = 0;
  this.y = 0;
  this.len = 10;
  this.time = 0;
  this.speedX = 25;
  this.speedY = 0;
  this.foodX = random(width / 25);
  this.foodY = random(height / 25);
  this.foodX = round(this.foodX);
  this.foodY = round(this.foodY);
  if (this.foodX > width / 25 - 1) {
    this.foodX--;
  }
  if (this.foodY > height / 25 - 1) {
    this.foodY--;
  }
  this.display = function() {
    fill(255);
    rect(this.x, this.y, 25, 25);
  }

  this.food = function() {
    //display
    fill(255, 0, 0);
    rect(this.foodX * 25, this.foodY * 25, 25, 25);
    //eat
    if (this.foodX * 25 == this.x && this.foodY * 25 == this.y) {
      this.foodX = random(width / 25);
      this.foodY = random(height / 25);
      this.foodX = round(this.foodX);
      this.foodY = round(this.foodY);
      if (this.foodX > width / 25 - 1) {
        this.foodX--;
      }
      if (this.foodY > height / 25 - 1) {
        this.foodY--;
      }
      bodyx.push(this.x);
      bodyy.push(this.y);
      body.push(new Body());
      if (this.len > -1) {
        this.len = this.len - 0.15;
      }
    }
  };
  this.move = function() {
    if (keyIsDown(UP_ARROW) && this.speedY == 0) {
      this.speedX = 0;
      this.speedY = -25;
    }
    if (keyIsDown(DOWN_ARROW) && this.speedY == 0) {
      this.speedX = 0;
      this.speedY = 25;
    }
    if (keyIsDown(LEFT_ARROW) && this.speedX == 0) {
      this.speedX = -25;
      this.speedY = 0;
    }
    if (keyIsDown(RIGHT_ARROW) && this.speedX == 0) {
      this.speedX = 25;
      this.speedY = 0;
    }

    if (this.time > this.len) {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
      //stop
      if (this.x > width || this.x < 0) {
        stop = 1;
      }
      if (this.y > height || this.y < 0) {
        stop = 1;
      }
      for (var c = 0; c < bodyx.length - 1; c++) {
        if (bodyx[c] == this.x && bodyy[c] == this.y) {
          stop = 1;
        }
      }
      //stop
      this.time = 0;
      bodyx.push(this.x);
      bodyy.push(this.y);
      bodyx.splice(0, 1);
      bodyy.splice(0, 1);
    }
    this.time++;
  };
}

function Body() {
  this.time = 0;
  this.display = function() {
    for (var i = 0; i < bodyx.length; i++) {
      fill(255);
      rect(bodyx[i], bodyy[i], 25, 25);
    }
  };
}
