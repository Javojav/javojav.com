function button() {
	background(0);
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
	px = 100,
		py = 100,
		a = 5,
		b = -5,
		plus = true,
		shot = [],
		zombie = [],
		look = 1,
		level = 0,
		stop = false,
		wait = 101,
		reloadx = 23,
		reloady = 20,
		auto = 30;
	ammo = {
			ingun: 8,
			total: 40
		},
		akammo = {
			ingun: 31,
			total: 124
		}, next = 0,
		bag = [];
	bag.push(new Bag());
	bag[0].x = 10000;
	bag[0].y = 10000;
}