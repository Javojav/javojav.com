function keyPressed() {
	if (keyCode === 32 && room != 1) {
		if (gun == true) {
			if (ammo.ingun > 0) {
				shot.push(new Shot());
				ammo.ingun--;
			}
		}
	}
	if (keyCode === 32 && room == 1) {
		buy();
	}
	if (key == 'r' || key == 'R' || ammo.ingun < 1 && gun == true && wait > 100) {
		reloadgun();
		wait = 0;
	}
	if (key == '1') gun = true;
	if (key == '2') gun = false;
}

function reloadgun() {
	if (wait == 75 && ammo.total > 0) {
		var left = ammo.ingun;
		ammo.ingun = 8;
		ammo.total -= 8;
		ammo.total += left;
		if (ammo.total < 8) {
			ammo.ingun += ammo.total
			if (ammo.ingun > 8) {
				ammo.total = ammo.ingun - 8;
				ammo.ingun = 8;
			}
		}
	}
}

function reloadak() {
	if (wait == 75 && akammo.total > 0) {
		var left = akammo.ingun;
		akammo.ingun = 31;
		akammo.total -= 31;
		akammo.total += left;
		if (akammo.total < 31) {
			akammo.ingun += akammo.total
			if (akammo.ingun > 31) {
				akammo.total = akammo.ingun - 31;
				akammo.ingun = 31;
			}
		}
	}
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
		if ( /**/ gun === false && auto > 10 && akammo.ingun > 0) {
			auto = 0;
			shot.push(new Shot());
			akammo.ingun--;
			if (akammo.ingun < 1 && gun == false) {
				reloadak();
				wait = 0;
			}
		}
	}
}
