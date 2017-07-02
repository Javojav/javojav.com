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
	total: 40
},
akammo = {
	ingun: 0,
	total: 0
},
gun = true,
bag = [],
auto = 30,
next = 0,
invencible = 255,
howmanybosses = 0,
room = 0,
money = 0;

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
		reloadgun();
		reloadak();
		HUD();
		playermove();
		playershoot();
		classloop();
		nextlevel();
		if (a > 3) plus = false;
		if (a < -3) plus = true;
	}
	if (vida < 0) button();
}
