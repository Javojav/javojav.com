function classloop() {
  for (var i = shot.length - 1; i > -1; i--) {
    shot[i].display();
    shot[i].move();
    shot[i].hit();
    if (look == 3) player(px, py, look, 1, 0);
    if (shot[i].x < 75 || shot[i].x > width - 75 || shot[i].y < 45 || shot[i].y > height - 75 || shot[i].hit == 1) shot.splice(i, 1);
  }
  for (var i2 = 0; i2 < zombie.length; i2++) {
    zombie[i2].move();
    zombie[i2].display();
    zombie[i2].die();
  }
  for (var i6 = 0; i6 < boss.length; i6++) {
    boss[i6].move();
    boss[i6].display();
    boss[i6].die();
  }
  if (room == 0) {
    for (var i4 = bag.length - 1; i4 > -1; i4--) {
      bag[i4].display();
      for (var i5 = bag.length - 1; i5 > -1; i5--) {
        if (px < bag[i5].x + 20 && px > bag[i5].x - 20 && py < bag[i5].y + 20 && py > bag[i5].y - 50) {
          money += bag[i5].dollars;
          i4--;
          bag.splice(i5, 1);
        }
      }
    }
  }
}

function nextlevel() {
  if (zombie.length < 1 && next == 2 && boss.length < 1) {
    next = 0;
  }
  if (next == 0) {
    if (px < width - 75 && px > width - 100 && py > height / 2 - 100 && py < height / 2 + 100) {
      level++;
      for (var ii = bag.length - 1; ii > -1; ii--) {
        bag.splice(ii, 1);
      }
      next = 1;
    }
  }
  if (next == 1) {
    px = 100;
    if (level != 5) {
      if (level % 5 === 0) howmanybosses++;
      for (var i7 = 0; i7 < howmanybosses; i7++) {
        boss.push(new Boss())
        next = 2;
      }
      for (var i3 = 0; i3 < level; i3++) {
        zombie.push(new Zombie())
        next = 2;
      }
    }
    if (level == 5) {
      boss.push(new Boss())
      next = 2;
    }
  }
}
