function Bob(X, Y) {
  Y = height - 135 * 2;
  stroke(0);
  strokeWeight(2);
  //head
  fill(55, 125, 165);
  ellipse(X, Y, 155 * 2, 155 * 2);
  //face
  //eyes
  fill(255);
  ellipse(X - 30 * 2, Y - 15 * 2, 35 * 2, 35 * 2);
  ellipse(X + 30 * 2, Y - 15 * 2, 35 * 2, 35 * 2);
  fill(0);
  ellipse(X - 30 * 2, Y - 15 * 2, 12 * 2, 15 * 2);
  ellipse(X + 30 * 2, Y - 15 * 2, 12 * 2, 15 * 2);
  //mouth
  strokeWeight(4);
  noFill();
  beginShape();
  curveVertex(X - 35 * 2, Y + 25 * 2);
  curveVertex(X - 35 * 2, Y + 25 * 2);
  curveVertex(X - 10 * 2, Y + 39 * 2);
  curveVertex(X + 10 * 2, Y + 39 * 2);
  curveVertex(X + 35 * 2, Y + 25 * 2);
  curveVertex(X + 35 * 2, Y + 25 * 2);
  endShape();
  //arms
  if (bLeftArm == 0) {
    line(X - 77 * 2, Y, X - 120 * 2, Y + 50 * 2);
  }
  if (bLeftArm == 1) {
    line(X - 77 * 2, Y, X - 120 * 2, Y - 50 * 2);
  }
  if (bRightArm == 0) {
    line(X + 77 * 2, Y, X + 120 * 2, Y + 50 * 2);
  }
  if (bRightArm == 1) {
    line(X + 77 * 2, Y, X + 120 * 2, Y - 50 * 2);
  }

  //legs
  line(X - 20 * 2, Y + 77 * 2, X - 70 * 2, Y + 125 * 2);
  line(X + 20 * 2, Y + 77 * 2, X + 70 * 2, Y + 125 * 2);
  //Message
  if (bMessage == 1) {
    fill(255);
    rect(X + 20 * 2, Y - 125 * 2, 200 * 2, -60 * 2);
    beginShape();
    vertex(X + 50 * 2, Y - 125 * 2);
    vertex(X + 20 * 2, Y - 125 * 2);
    vertex(X, Y - 50 * 2);
    endShape(CLOSE);
    strokeWeight(1);
    fill(0);
    textSize(25 * 2);
    text("Hi,", X + 25 * 2, Y - 160 * 2);
    text("My name is Bob", X + 25 * 2, Y - 135 * 2);
  }
}

function fred(X, Y) {
  Y = height - 135 * 2;
  stroke(0);
  strokeWeight(2 * 2);
  //head
  fill(255, 200, 0);
  beginShape();
  vertex(X - 85 * 2, Y + 77 * 2);
  vertex(X, Y - 77 * 2);
  vertex(X + 85 * 2, Y + 77 * 2);
  endShape(CLOSE);
  //face
  //eyes
  fill(255);
  ellipse(X, Y - 20 * 2, 35 * 2, 35 * 2);
  fill(0);
  ellipse(X, Y - 20 * 2, 12 * 2, 15 * 2);
  //mouth
  strokeWeight(4 * 2);
  noFill();
  beginShape();
  curveVertex(X - 35 * 2, Y + 45 * 2);
  curveVertex(X - 35 * 2, Y + 45 * 2);
  curveVertex(X - 10 * 2, Y + 42 * 2);
  curveVertex(X + 10 * 2, Y + 42 * 2);
  curveVertex(X + 35 * 2, Y + 45 * 2);
  curveVertex(X + 35 * 2, Y + 45 * 2);
  endShape();
  //hair (eyes)
  strokeWeight(5 * 2);
  line(X, Y - 40 * 2, X, Y - 50 * 2);
  line(X + 10 * 2, Y - 37 * 2, X + 25 * 2, Y - 45 * 2);
  line(X - 10 * 2, Y - 37 * 2, X - 25 * 2, Y - 45 * 2);
  //arms
  strokeWeight(3 * 2);
  if (fLeftArm == 0) {
    line(X - 45 * 2, Y, X - 100 * 2, Y + 50 * 2);
  }
  if (fLeftArm == 1) {
    line(X - 45 * 2, Y, X - 100 * 2, Y - 50 * 2);
  }
  if (fRightArm == 0) {
    line(X + 45 * 2, Y, X + 100 * 2, Y + 50 * 2);
  }
  if (fRightArm == 1) {
    line(X + 45 * 2, Y, X + 100 * 2, Y - 50 * 2);
  }

  //legs
  line(X - 20 * 2, Y + 77 * 2, X - 70 * 2, Y + 125 * 2);
  line(X + 20 * 2, Y + 77 * 2, X + 70 * 2, Y + 125 * 2);
  //Message
  if (fMessage == 1) {
    fill(255);
    rect(X + 20 * 2, Y - 125 * 2, 210 * 2, -60 * 2);
    beginShape();
    vertex(X + 50 * 2, Y - 125 * 2);
    vertex(X + 20 * 2, Y - 125 * 2);
    vertex(X + 10 * 2, Y - 60 * 2);
    endShape(CLOSE);
    strokeWeight(1);
    fill(0);
    textSize(25 * 2);
    text("Hi,", X + 25 * 2, Y - 160 * 2);
    text("My name is Fred", X + 25 * 2, Y - 135 * 2);
  }
}

function mike(X, Y) {
  Y = height - 135 * 2;
  stroke(0);
  strokeWeight(2 * 2);
  //head
  fill(255, 90, 0);
  rect(X - 77.5 * 2, Y - 77.5 * 2, 155 * 2, 155 * 2);
  //face
  //eyes
  fill(255);
  ellipse(X - 30 * 2, Y - 25 * 2, 35 * 2, 35 * 2);
  ellipse(X + 30 * 2, Y - 25 * 2, 35 * 2, 35 * 2);
  fill(0);
  ellipse(X - 30 * 2, Y - 25 * 2, 12 * 2, 15 * 2);
  ellipse(X + 30 * 2, Y - 25 * 2, 12 * 2, 15 * 2);
  //mouth
  strokeWeight(4);
  noFill();
  line(X - 35 * 2, Y + 30 * 2, X + 35 * 2, Y + 30 * 2);
  fill(255);
  beginShape();
  vertex(X - 30 * 2, Y + 30 * 2);
  vertex(X - 20 * 2, Y + 50 * 2);
  vertex(X - 10 * 2, Y + 30 * 2);
  endShape(CLOSE);
  //arms
  if (mLeftArm == 0) {
    line(X - 77 * 2, Y, X - 120 * 2, Y + 50 * 2);
  }
  if (mLeftArm == 1) {
    line(X - 77 * 2, Y, X - 120 * 2, Y - 50 * 2);
  }
  if (mRightArm == 0) {
    line(X + 77 * 2, Y, X + 120 * 2, Y + 50 * 2);
  }
  if (mRightArm == 1) {
    line(X + 77 * 2, Y, X + 120 * 2, Y - 50 * 2);
  }

  //legs
  line(X - 20 * 2, Y + 77 * 2, X - 70 * 2, Y + 125 * 2);
  line(X + 20 * 2, Y + 77 * 2, X + 70 * 2, Y + 125 * 2);
  //Message
  if (mMessage == 1) {
    fill(255);
    rect(X + 20 * 2, Y - 125 * 2, 220 * 2, -60 * 2);
    beginShape();
    vertex(X + 50 * 2, Y - 125 * 2);
    vertex(X + 20 * 2, Y - 125 * 2);
    vertex(X, Y - 50 * 2);
    endShape(CLOSE);
    strokeWeight(1 * 2);
    fill(0);
    textSize(25 * 2);
    text("Hi,", X + 25 * 2, Y - 160 * 2);
    text("My name is Mike", X + 25 * 2, Y - 135 * 2);
  }
}