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

function setup() {
	createCanvas(800, 600);
}

function draw() {
	if (vida > -1) {
		lugar();
		if (room == 1) {
			shop();
		}
		invencible++;
		player(px, py, look, 1, 0);
		reloadsmall();
		reloadbig();
		HUD();
		waitrevolver++;
		playermove();
		playershoot();
		classloop();
		nextlevel();
		if (a > 3) plus = false;
		if (a < -3) plus = true;
	}
	if (vida < 0) button();
}
