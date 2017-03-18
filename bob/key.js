function keyPressed() {
  if (key == 'Q' || key == 'q') {
    mRightArm = 0;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'W' || key == 'w') {
    mRightArm = 1;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'E' || key == 'e') {
    mLeftArm = 0;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'R' || key == 'r') {
    mLeftArm = 1;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'T' || key == 't') {
    mMessage = 1;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'Y' || key == 'y') {
    mMessage = 0;
    sm = true;
    b = false;
    f = false
    m = true;
  }
  if (key == 'U' || key == 'u') sm = false;
  if (key == '1') {
    bRightArm = 0;
    sb = true;
    m = false;
    f = false
    b = true;
  }
  if (key == '2') {
    bRightArm = 1;
    sb = true;
    m = false;
    f = false
    b = true;

  }
  if (key == '3') {
    bLeftArm = 0;
    sb = true;
    m = false;
    f = false
    b = true;

  }
  if (key == '4') {
    bLeftArm = 1;
    sb = true;
    m = false;
    f = false
    b = true;

  }
  if (key == '5') {
    bMessage = 1;
    sb = true;
    m = false;
    f = false
    b = true;

  }
  if (key == '6') {
    bMessage = 0;
    sb = true;
    m = false;
    f = false
    b = true;

  }
  if (key == '7') sb = false;
  if (key == 'a' || key == 'A') {
    fRightArm = 0;
    sf = true;
    m = false;
    b = false
    f = true;
  }
  if (key == 's' || key == 'S') {
    fRightArm = 1;
    sf = true;
    m = false;
    b = false
    f = true;
  }
  if (key == 'd' || key == 'D') {
    fLeftArm = 0;
    sf = true;
    m = false;
    b = false
    f = true;
  }
  if (key == 'f' || key == 'F') {
    fLeftArm = 1;
    sf = true;
    m = false;
    b = false
    f = true;
  }
  if (key == 'g' || key == 'G') {
    fMessage = 1;
    sf = true;
    m = false;
    b = false
    f = true;
  }
  if (key == 'h' || key == 'H') {
    fMessage = 0;
    sf = true;
    m = false;
    b = false
    f = true;

  }
  if (key == 'j' || key == 'J') sf = false;
}
