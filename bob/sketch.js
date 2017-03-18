var X, Y, mRightArm = 0,
  mLeftArm = 0,
  mMessage = 0,
  mikex = 900,
  mikey, bRightArm = 0,
  bLeftArm = 0,
  bMessage = 0,
  fRightArm = 0,
  fLeftArm = 0,
  fMessage = 0,
  bobx, boby, fredx = 100,
  fredy;
var b = true,
  m = false,
  f = true,
  sb = true,
  sf = false,
  sm = false;

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bobx = width / 2;
}

function draw() {
  background(70, 70, 255);
  noStroke();
  fill(10, 255, 10);
  rect(0, height - 20, width, 20);
  if (sb == true) Bob(bobx, boby);
  if (sf == true) fred(fredx, fredy);
  if (sm == true) mike(mikex, mikey);
  if (mouseIsPressed) {
    if (m == true && b == false) {
      mikex = mouseX;
      mikey = mouseY;
    }
    if (b == true && m == false) {
      bobx = mouseX;
      boby = mouseY;
    }
    if (b == false && m == false) {
      fredx = mouseX;
      fredy = mouseY;
    }
  }
}