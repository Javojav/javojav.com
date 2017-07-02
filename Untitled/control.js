function keyPressed() {
	if (keyCode === 32 && room != 1) {
		if (gun == true && smallgun == 1) {
			if (ammo.ingun > 0) {
				shot.push(new Shot());
				ammo.ingun--;
			}
		}
		if (gun == true && smallgun == 2) {
			if (ammo.ingun > 0 && waitrevolver > 30) {
				shot.push(new Shot());
				ammo.ingun--;
				waitrevolver = 0;
			}
		}
	}
	if (keyCode === 32 && room == 1) {
		buy();
	}
	if (key == 'r' || key == 'R' || ammo.ingun < 1 && gun == true && wait > 100) {
		reloadsmall();
		wait = 0;
	}
	if (key == '1') gun = true;
	if (key == '2') gun = false;
}

function playermove() {
	if (keyIsDown(UP_ARROW) && py > 45) {
		if (room == 1) {
			if (py > 228) {
				py -= 2;
			}
		} else {
			py -= 2;
		}
		look = 3;
		if (plus === true) {
			a += 2;
			b -= 2;
		} else {
			a -= 2;
			b += 2;
		}
	}
	if (keyIsDown(RIGHT_ARROW) && px < width - 90) {
		px += 2;
		look = 1;
		if (plus === true) {
			a += 2;
			b -= 2;
		} else {
			a -= 2;
			b += 2;
		}
	}
	if (keyIsDown(DOWN_ARROW) && py < height - 120) {
		py += 2;
		look = 2;
		if (plus === true) {
			a += 2;
			b -= 2;
		} else {
			a -= 2;
			b += 2;
		}
	}
	if (keyIsDown(LEFT_ARROW) && px > 90) {
		px -= 2;
		look = 0;
		if (plus === true) {
			a += 2;
			b -= 2;
		} else {
			a -= 2;
			b += 2;
		}
	}
}

function playershoot() {
	wait++;
	auto++;
	if (keyIsDown(32) && room != 1) {
		if (gun === false && auto > 10 && bigammo.ingun > 0) {
			auto = 0;
			shot.push(new Shot());
			bigammo.ingun--;
			if (bigammo.ingun < 1 && gun == false) {
				reloadbig();
				wait = 0;
			}
		}
	}
}
