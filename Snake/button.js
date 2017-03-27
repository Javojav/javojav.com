function button() {
  var h = 300,
    w = 300,
    bx = width / 2 - w / 2,
    by = height / 2 - h / 2;
  var x = map(mouseX, bx, bx + w, 0, 1);
  var y = map(mouseY, by, by + h, 0, 1);
  if (x > 0 && x < 1 && y > 0 && y < 1) fill(150);
  else fill(255);
  rect(bx, by, w, h);
  if (mouseIsPressed && x > 0 && x < 1 && y > 0 && y < 1) reset();
}

function reset() {
  head = [];
  body = [];
  bodyx = [];
  bodyy = [];
  stop = 0;
  head.push(new Head());
  body.push(new Body());
}
