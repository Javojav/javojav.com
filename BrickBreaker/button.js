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