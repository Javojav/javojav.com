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

function gunwithnoname1(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  line(x, y + 7, x, y);
  line(x+3, y-2, x + 10, y-2);
  line(x+3, y-1, x + 12, y-1);
  line(x, y, x + 10, y);
  strokeWeight(1);
}

function gunwithnoname2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  line(x, y + 7, x, y);
  line(x-3, y-2, x - 10, y-2);
  line(x-3, y-1, x - 12, y-1);
  line(x, y, x - 10, y);
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

function bigbig1(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x, y + 5,35,1);
  rect(x+25,y+5,2,-2)
  ellipse(x+15,y+12,7)
  rect(x,y+5,1,8);
  strokeWeight(1);
}

function bigbig2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x, y + 5,-35,1);
  rect(x-25,y+5,-2,-2)
  ellipse(x-15,y+12,7)
  rect(x,y+5,-1,8);
  strokeWeight(1);
}

function shotgun1(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x+1,y+5,20,3);
  noStroke();
  rect(x+7,y+10,13,2);
  stroke(0);
  rect(x+5,y+5,12,-2);
  rect(x+1,y+5,1,8);
  strokeWeight(1);
}

function shotgun2(x,y) {
  stroke(0);
  strokeWeight(3);
  fill(0);
  rect(x-1,y+5,-20,3);
  noStroke();
  rect(x-7,y+10,-13,2);
  stroke(0);
  rect(x-5,y+5,-12,-2);
  rect(x-1,y+5,-1,8);
  strokeWeight(1);
}
