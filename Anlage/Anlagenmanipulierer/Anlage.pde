import processing.sound.*;
SoundFile Manipuliert;
PImage Habt_ihr_hier, die_Anlage;
boolean stegy = true;
float wait = 0;
void setup() {
  fullScreen();
  background(255);
  Habt_ihr_hier = loadImage("habt_ihr_hier.png");
  die_Anlage = loadImage("die_Anlage.png");
  Manipuliert = new SoundFile(this, "Manipuliert.mp3");
  Manipuliert.loop();
  noCursor();
}      


void draw() {
  background(0);
  if (keyPressed || mousePressed) Manipuliert.amp(1.0);
  else Manipuliert.amp(0.0);
  if (mousePressed) {
    if (stegy == true) image(Habt_ihr_hier, 0, 0, width, height);
    if (stegy == false) image(die_Anlage, 0, 0, width, height);
  }
  wait+=random(0.1, 0.5);
  if (wait > 1 && stegy == true) {
    wait = 0;
    stegy = false;
  }
  if (wait > 1 && stegy == false) {
    wait = 0;
    stegy = true;
  }
}
