function gun1(x,y) {
  stroke(0);
  fill(0);
  strokeWeight(3);
  line(x, y + 5, x, y);
  line(x, y, x + 5, y);
  strokeWeight(1);
}

function gun2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  line(x, y + 5, x, y);
  line(x, y, x - 5, y);
  strokeWeight(1);
}

function ak1(x,y) {
  stroke(0);
  fill(0);
  strokeWeight(3);
  line(x, y + 9, x, y + 2);
  rect(x + 5, y, 3, 2);
  rect(x + 7, y, 1, -2);
  line(x, y + 2, x + 18, y+2);
  rect(x + 11, y + 4, 1, 5);
  line(x, y + 3, x + 15, y + 3);
  line(x, y + 4, x + 12, y + 4);
  strokeWeight(1);
}

function ak2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  line(x, y + 9, x, y + 2);
  rect(x - 5, y, -3, 2);
  rect(x - 7, y, -1, -2);
  line(x, y + 2, x - 18, y+2);
  rect(x - 11, y + 4, 1, 5);
  line(x, y + 3, x - 15, y + 3);
  line(x, y + 4, x - 12, y + 4);
  strokeWeight(1);
}

function revolver1(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x, y + 5,1,6);
  rect(x,y,8,6)
  rect(x, y, 20, 1);
  strokeWeight(1);
}

function revolver2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x, y + 5,-1,6);
  rect(x,y,-8,6)
  rect(x, y, -20, 1);
  strokeWeight(1);
}
