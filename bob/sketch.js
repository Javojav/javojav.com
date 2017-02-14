var X, Y, RightArm = 0, LeftArm = 0, Message = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(70, 70, 255);
  noStroke();
  fill(10, 255, 10);
  rect(0, height-10, width, 10);
  Bob(width/2, 120);
}

function draw() {
  background(70, 70, 255);
  noStroke();
  fill(10, 255, 10);
  rect(0, height-10, width, 10;
  bob(mouseX, mouseY);
}

function Bob(X, Y) {
  Y = height-135;
  stroke(0);
  strokeWeight(2);
  //head
  fill(55, 125, 165);
  ellipse(X, Y, 155, 155);
  //face
  //eyes
  fill(255);
  ellipse(X-30, Y-15, 35, 35);
  ellipse(X+30, Y-15, 35, 35);
  fill(0);
  ellipse(X-30, Y-15, 12, 15);
  ellipse(X+30, Y-15, 12, 15);
  //mouth
  strokeWeight(4);
  noFill();
  beginShape();
  curveVertex(X-35, Y+25);
  curveVertex(X-35, Y+25);
  curveVertex(X-10, Y+39);
  curveVertex(X+10, Y+39);
  curveVertex(X+35, Y+25);
  curveVertex(X+35, Y+25);
  endShape();
  //arms
  if (LeftArm == 0) {
    line(X-77, Y, X-120, Y+50);
  }
  if (LeftArm == 1) {
    line(X-77, Y, X-120, Y-50);
  }
  if (RightArm == 0) {
    line(X+77, Y, X+120, Y+50);
  }
  if (RightArm == 1) {
    line (X+77, Y, X+120, Y-50);
  }

  //legs
  line(X-20, Y+77, X-70, Y+125);
  line(X+20, Y+77, X+70, Y+125);
  //Message
  if (Message == 1) {
    fill(255);
    rect(X+20, Y-125, 200, -60);
    beginShape()
    vertex(X+50,Y-125)
    vertex(X+20,Y-125)
    vertex(X, Y-50)
    endShape(CLOSE);
    strokeWeight(1);
    fill(0);
    textSize(25);
    text("Hi,", X+25, Y-160);
    text("My name is Bob", X+25, Y-135);
  }
}

function keyPressed() {
  if (key == 1) {
    RightArm = 0;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
  if (key == 2) {
    RightArm = 1;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
  if (key == 3) {
    LeftArm = 0;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
  if (key == 4) {
    LeftArm = 1;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
  if (key == 5) {
    Message = 1;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
  if (key == 6) {
    Message = 0;
    background(70, 70, 255);
    noStroke();
    fill(10, 255, 10);
    rect(0, height-10, width, 10)
    Bob(mouseX, mouseY);
  }
}
