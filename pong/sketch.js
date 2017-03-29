var BY, BX, T, BDY, BDX;
var Pb, Bot;
var PtsA = 0,
  PtsB = 0;

function setup() {
  background(0);
  createCanvas(1080, 720);
  BY = height / 2;
  BX = width / 2;
  BDY = random(-7, 7);
  BDX = 1;
  T = random(1, 10);
  Pb = height / 2 - 15;
  slider = createSlider(0, 20, 3, 0, 3, 6, 10,15,20);
  a = createA(href = "/PongBot", "Bot");
  a.style("background-color", "purple");
  a.style("font-family", "'Rajdhani', sans-serif");
  a = createA(href = "/Pong2P", "2P");
  a.style("font-family", "'Rajdhani', sans-serif");
}

function draw() {
  background(0);
  textSize(20);
  fill(255);
  text("©Javi", width - 55, height - 10);

  //puntos
  textSize(100);
  fill(255);
  text(PtsA, width * 0.25, height / 2);
  text(PtsB, width * 0.75, height / 2);

  //jugadores
  fill(255);
  rect(width - 15, mouseY, 15, 60);
  rect(0, Pb, 15, 60);

  //linea centro
  rect(width / 2 - 5, 0, 10, height);

  //pelota
  fill(150, 0, 0);
  ellipse(BX, BY, 50, 50);

  //bot
  if (Pb < 0) {
    Pb = 2;
  }

  if (Pb > height - 60) {
    Pb = height - 62;
  }

  if (BX < width / 2) {
    if (Bot == 0) {
      Pb = BY - 30;
    } else {
      if (Pb > BY) {
        Pb = Pb - (T + slider.value());
      }
      if (Pb < BY) {
        Pb = Pb + (T + slider.value());
      }
      if (Pb < BY + 30 && Pb > BY - 30) {
        Bot = 0;
      }
    }
  }

  //direccion pelota
  if (BDX == 1) {
    BX = BX - slider.value();
  }
  if (BDX == 2) {
    BX = BX + slider.value();
  }

  //pelota arriba/abajo
  if (slider.value() > 0) {
    BY = BY - BDY;
  }
  
  //choque
  if (BY < 25 || BY > height - 25) {
    BDY = BDY * -1;
  }
  if (BX > width - 25 && BY < mouseY + 60 && BY > mouseY) {
    BDX = 1;
    BDY = random(-7, 7);
    T = T - 1
    Bot = 1;
  }
  if (BX < 25 && BY < Pb + 60 && BY > Pb) {
    BDX = 2;
    T = T - 1;
    BDY = random(-7, 7);
    Bot = 1;
  }

  //reset
  if (BX < 0) {
    PtsB = PtsB + 1;
    BY = height / 2;
    BX = width / 2;
    BDY = random(-7, 7);
    BDX = 2;
    T = random(1, 10);
  }
  if (BX > width) {
    PtsA = PtsA + 1;
    BY = height / 2;
    BX = width / 2;
    BDY = random(-7, 7);
    BDX = 1;
    T = random(1, 10);
  }
}
