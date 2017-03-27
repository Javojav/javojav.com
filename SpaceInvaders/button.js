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
  if (mouseIsPressed && x > 0 && x < 1 && y > 0 && y < 1) reset1();
}

function reset1() {
  alien = [];
  shot = [];
  a = 0;
  dirx = 0.5;
  stop = 0;
  level = 0;
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