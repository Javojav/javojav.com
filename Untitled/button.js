function button() {
	background(0);
	var h = 200,
	w = 200,
	bx = width / 2 - w / 2,
	by = height / 2 - 120 - h / 2;
	var x = map(mouseX, bx, bx + w, 0, 1);
	var y = map(mouseY, by, by + h, 0, 1);
	if (x > 0 && x < 1 && y > 0 && y < 1) fill(150);
	else fill(0);
	//	rect(bx, by, w, h);
	stroke(255)
	//fill(0)
	textSize(50)
	ellipse(width / 2, height / 2 - 120, 200);
	fill(255);
	text("x", width / 2 - 53, height / 2 - 145);
	text("x", width / 2 + 30, height / 2 - 145);
	text("Game over", 276, height / 2 + 50);
	if (mouseIsPressed && x > 0 && x < 1 && y > 0 && y < 1) reset();
}

function reset() {
	var px = 100,
	py = 100,
	a = 5,
	b = -5,
	plus = true,
	shot = [],
	zombie = [],
	boss = [],
	look = 1,
	level = 0,
	vida = 3,
	wait = 101,
	reloadx = 23,
	reloady = 20,
	ammo = {
		ingun: 8,
		total: 40,
		dam: 0.75
	},
	bigammo = {
		ingun: 0,
		total: 0,
		dam: 0.5
	},
	gun = true,
	bag = [],
	auto = 30,
	next = 0,
	invencible = 255,
	howmanybosses = 0,
	room = 0,
	money = 0,
	biggun = 0,
	smallgun = 1,
	waitrevolver = 100;
	bag.push(new Bag());
	bag[0].x = 10000;
	bag[0].y = 10000;
}
