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
		ingun: 31,
		total: 124
	},
	gun = true,
	bag = [],
	auto = 30,
	next = 0,
	invencible = 255,
	howmanybosses = 0;

function setup() {
	createCanvas(800, 600);
}

function draw() {
	if (vida > -1) {
		lugar();
		invencible++;
		player(px, py);
		reloadgun();
		reloadak();
		wait++;
		if (ammo.total < 0) ammo.total = 0;
		if (akammo.total < 0) akammo.total = 0;
		if (ammo.ingun < 0) ammo.ingun = 0;
		if (akammo.ingun < 0) akammo.ingun = 0;

		fill(255)
		textSize(10);
		text(ammo.ingun + "/" + ammo.total, width - 75, height - 10);
		text(akammo.ingun + "/" + akammo.total, width - 150, height - 10);
		text("level: " + level, 10, height - 10);
		text("X " + vida, width - 200, height - 10);
		head(width - 208, height - 13.5);
		if (keyIsDown(UP_ARROW) && py > 45) {
			py -= 2;
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
		auto++;
		if (keyIsDown(32)) {
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
		for (var i = shot.length - 1; i > -1; i--) {
			shot[i].display();
			shot[i].move();
			shot[i].hit();
			if (look == 3) player(px, py);
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
		if (zombie.length < 1 && next == 2 && boss.length < 1) {
			next = 0;
		}
		if (next == 0) {
			fill(0)
			rect(width - 100, height / 2 - 100, 25, 200);
			if (px < width - 75 && px > width - 100 && py > height / 2 - 100 && py < height / 2 + 100) {
				level++;
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
		for (var i4 = bag.length - 1; i4 > -1; i4--) {
			bag[i4].display();
			for (var i5 = bag.length - 1; i5 > -1; i5--) {
				if (px < bag[i5].x + 20 && px > bag[i5].x - 20 && py < bag[i5].y + 20 && py > bag[i5].y - 50) {
					if (bag[i5].live == false) {
						if (bag[i5].boatopespepesial > 7.5) akammo.total += bag[i5].howmuch;
						if (bag[i5].boatopespepesial < 7.5) ammo.total += bag[i5].howmuch;
					}
					if (bag[i5].live == true) {
						vida++;
					}
					i4--;
					bag.splice(i5, 1);
				}
			}
		}
		if (a > 3) plus = false;
		if (a < -3) plus = true;
	}
	if (vida < 0) button();
}

function head(x, y) {
	strokeWeight(.5)
	stroke(255);
	fill(0);
	ellipse(x, y, 10, 10);
	fill(255);
	ellipse(x - 3, y - 1, 1);
	ellipse(x + 3, y - 1, 1);
	strokeWeight(1);
	stroke(0);
}

function lugar() {
	stroke(255)
	background(125, 75, 50);
	fill(100);
	rect(75, 75, 650, 450)
	line(0, 0, 75, 75);
	line(width, 0, width - 75, 75);
	line(0, height, 75, height - 75);
	line(width, height, width - 75, height - 75);
	fill(0);
	line(0, 0, 0, height);
	line(width - 1, 0, width - 1, height);
	line(0, height - 1, width, height - 1);
	for (var c = 0; c < 11; c++) {
		for (var i = 0; i < 3; i++) {
			stroke(255);
			line(i * 25, i * 25, width - i * 25, i * 25);
			if (i == 2 && c == 10) stroke(125, 75, 50);
			if (i != 1 && c != 11) line(c * 75, i * 25, c * 75, i * 25 + 25);
			else if (c != 1) line(c * 75 - 37.5, i * 25, c * 75 - 37.5, i * 25 + 25);
			if (c == 1 && i == 1) line(c * 75 - 37.5, i * 25, c * 75 - 37.5, i * 25 + 25 / 2);
			stroke(255);
		}
	}
	for (c = 1; c < 11; c++) {
		for (i = 0; i < 4; i++) {
			line(i * 25, height - i * 25, width - i * 25, height - i * 25);
			if (i == 3 && c == 1) stroke(125, 75, 50);
			if (i != 1 && i != 3) line(c * 75, height - i * 25, c * 75, height - i * 25 + 25);
			else line(c * 75 - 37.5, height - i * 25, c * 75 - 37.5, height - i * 25 + 25);
			if (c == 1 && i == 1) line(height - c * 75 - 37.5, i * 25, height - c * 75 - 37.5, i * 25 + 25 / 2);
			stroke(255)
		}
	}
	for (c = 1; c < 11; c++) {
		for (i = 0; i < 3; i++) {
			line(i * 25, i * 25, i * 25, height - i * 25);
			line(i * 25, i * 25, width - i * 25, i * 25);
			if (i == 2 && c == 10) stroke(125, 75, 50);
			if (i != 1 && c != 8) line(i * 25, c * 75, i * 25 + 25, c * 75);
			else if (c != 8 && c != 1) line(i * 25, c * 75 - 37.5, i * 25 + 25, c * 75 - 37.5);
			if (c == 1 && i == 1) line(i * 25, c * 75 - 37.5, i * 25 + 25 / 2, c * 75 - 37.5);
			if (c == 8 && i == 1) line(i * 25, c * 75 - 37.5, i * 25 + 25 / 2, c * 75 - 37.5);
			stroke(255);
		}
	}
	for (c = 1; c < 11; c++) {
		for (i = 0; i < 4; i++) {
			line(width - i * 25, i * 25, width - i * 25, height - i * 25);
			line(width - i * 25, i * 25, width - i * 25, i * 25);
			if (i == 3 && c == 1) stroke(125, 75, 50);
			if (i == 3 && c == 8) stroke(125, 75, 50);
			if (i != 3 && i != 1) line(width - i * 25, c * 75, width - i * 25 + 25, c * 75);
			else if (c != 9 && c !== 0) line(width - i * 25, c * 75 - 37.5, width - i * 25 + 25, c * 75 - 37.5);
			stroke(255);
		}
	}
	stroke(255);
	rect(0, height - 25, width, 25);
	stroke(0);
	if (level > 0) rect(75, height / 2 - 100, 5, 200);
	rect(width - 80, height / 2 - 100, 5, 200);
}



function player(px, py) {
	stroke(0);
	//noStroke();
	fill(0, invencible)
	ellipse(px, py, 30, 30);
	fill(255, invencible);
	if (look == 1) {
		ellipse(px + 7, py - 2, 5, 5);
		fill(0, invencible)
		rect(px - 6, py + 18, 12, 20);
		strokeWeight(3);
		line(px, py + 23, px + 12, py + 23);
		if (gun == true) {
			line(px + 10, py + 25, px + 10, py + 20);
			line(px + 10, py + 20, px + 15, py + 20);
		}
		if (gun == false) {
			line(px + 10, py + 26, px + 10, py + 19);
			rect(px + 15, py + 17, 3, 2);
			rect(px + 17, py + 17, 1, -2);
			line(px + 10, py + 19, px + 28, py + 19);
			rect(px + 21, py + 21, 1, 5);
			line(px + 10, py + 20, px + 25, py + 20);
			line(px + 10, py + 21, px + 22, py + 21);
		}
		line(px - 2, py + 39, px - 2 + a, py + 44);
		line(px + 2, py + 39, px + 2 + b, py + 44);
		strokeWeight(1);
	}
	if (look === 0) {
		ellipse(px - 7, py - 2, 5, 5);
		fill(0, invencible)
		rect(px - 6, py + 18, 12, 20);
		strokeWeight(3);
		line(px, py + 23, px - 12, py + 23);
		if (gun == true) {
			line(px - 10, py + 25, px - 10, py + 20);
			line(px - 10, py + 20, px - 15, py + 20);
		}
		if (gun == false) {
			line(px - 10, py + 26, px - 10, py + 19);
			rect(px - 15, py + 17, -3, 2);
			rect(px - 17, py + 17, -1, -2);
			rect(px - 21, py + 21, 1, 5);
			line(px - 10, py + 19, px - 28, py + 19);
			line(px - 10, py + 20, px - 25, py + 20);
			line(px - 10, py + 21, px - 22, py + 21);
		}
		line(px + 2, py + 39, px + 2 + a, py + 44);
		line(px - 2, py + 39, px - 2 + b, py + 44);
		strokeWeight(1);
	}
	if (look == 2) {
		ellipse(px - 6, py - 2, 5, 5);
		ellipse(px + 6, py - 2, 5, 5);
		fill(0, invencible);
		rect(px - 8, py + 18, 16, 20);
		strokeWeight(3);
		line(px - 5, py + 39, px - 5, py + 45 + a);
		line(px + 5, py + 39, px + 5, py + 45 + b);
		strokeWeight(1);
	}
	if (look == 3) {
		fill(0, invencible)
		rect(px - 8, py + 18, 16, 20);
		strokeWeight(3);
		line(px - 5, py + 39, px - 5, py + 45 + a);
		line(px + 5, py + 39, px + 5, py + 45 + b);
		strokeWeight(1);
	}
	rect(px - 2, py + 10, 4, 8);
}

function keyPressed() {
	if (keyCode === 32) {
		if (gun == true) {
			if (ammo.ingun > 0) {
				shot.push(new Shot());
				ammo.ingun--;
			}
		}
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

function Boss() {
	this.x = round(random(100, width - 100));
	this.live = 5;
	this.livebar = 40 / this.live
	this.plus = true;
	this.za = -5;
	this.zb = 5;
	this.y = round(random(100, height - 100));
	while (px < this.x + 100 && px > this.x - 100 && py < this.y + 100 && py > this.y - 100) {
		this.x = round(random(100, width - 100));
		this.y = round(random(100, height - 100));
	}
	this.display = function() {
		bos(this.x, this.y, this.dir, this.za, this.zb);
		fill(0)
		rect(this.x - 20, this.y - 50, 40, 10);
		fill(255)
		rect(this.x - 20, this.y - 50, this.live * this.livebar, 10);
	};
	this.move = function() {
		if (px > this.x) {
			this.speedx = 0.6;
			this.dir = 1;
		}
		if (px == this.x) this.speedx = 0;
		if (px < this.x) {
			this.speedx = -0.6;
			this.dir = 0;
		}
		if (py > this.y) {
			this.speedy = 0.6;
		}
		if (py == this.y) this.speedy = 0;
		if (py < this.y) {
			this.speedy = -0.6;
		}
		if (this.x > width - (75 + 15 * 2)) this.x--;
		if (this.x < 75 + 15 * 2) this.x++;
		if (this.y > height - (75 + 50 * 2)) this.y--;
		if (this.plus == true) {
			this.za += 1;
			this.zb -= 1;
		} else {
			this.zb += 1;
			this.za -= 1;
		}
		if (this.za < -5) this.plus = true;
		if (this.za > 5) this.plus = false;

		this.x += this.speedx;
		this.y += this.speedy;
	};
	this.die = function() {
		if (px < this.x + 15 * 2 && px > this.x - 15 * 2 && py < this.y + 55 * 2 && py > this.y - 30 * 2) {
			if (invencible > 255) {
				invencible = 100;
				vida--;
			}
		}
	};
}

function bos(bx, by, blook, ba, bb) {
	//stroke(0);
	noStroke();
	fill(200, 0, 0);
	ellipse(bx, by, 30 * 2, 30 * 2);
	fill(255);
	if (blook == 1) {
		ellipse(bx + 7 * 2, by - 2 * 2, 5 * 2, 5 * 2);
		fill(200, 0, 0);
		rect(bx - 6 * 2, by + 18 * 2, 12 * 2, 20 * 2);
		strokeWeight(3 * 2);
		stroke(0);
		line(bx + 8 * 2, by + 23 * 2, bx + 15 * 2, by + 23 * 2);
		line(bx - 2 * 2, by + 39 * 2, bx - 2 * 2 + ba * 2, by + 44 * 2);
		line(bx + 2 * 2, by + 39 * 2, bx + 2 * 2 + bb * 2, by + 44 * 2);
		strokeWeight(1);
	}
	if (blook === 0) {
		ellipse(bx - 7 * 2, by - 2 * 2, 5 * 2, 5 * 2);
		fill(200, 0, 0);
		noStroke();
		rect(bx - 6 * 2, by + 18 * 2, 12 * 2, 20 * 2);
		stroke(0);
		strokeWeight(3 * 2);
		line(bx - 8 * 2, by + 23 * 2, bx - 15 * 2, by + 23 * 2);
		line(bx + 2 * 2, by + 39 * 2, bx + 2 * 2 + ba * 2, by + 44 * 2);
		line(bx - 2 * 2, by + 39 * 2, bx - 2 * 2 + bb * 2, by + 44 * 2);
		strokeWeight(1);
	}
	noStroke();
	fill(200, 0, 0);
	rect(bx - 2 * 2, by + 10 * 2, 4 * 2, 8 * 2);
	stroke(0);
}

function zom(zx, zy, zlook, za, zb) {
	//stroke(0);
	noStroke();
	fill(200, 0, 0);
	ellipse(zx, zy, 30, 30);
	fill(255);
	if (zlook == 1) {
		ellipse(zx + 7, zy - 2, 5, 5);
		fill(200, 0, 0);
		rect(zx - 6, zy + 18, 12, 20);
		strokeWeight(3);
		stroke(0);
		line(zx + 8, zy + 23, zx + 15, zy + 23);
		line(zx - 2, zy + 39, zx - 2 + za, zy + 44);
		line(zx + 2, zy + 39, zx + 2 + zb, zy + 44);
		strokeWeight(1);
	}
	if (zlook === 0) {
		ellipse(zx - 7, zy - 2, 5, 5);
		fill(200, 0, 0);
		noStroke();
		rect(zx - 6, zy + 18, 12, 20);
		stroke(0);
		strokeWeight(3);
		line(zx - 8, zy + 23, zx - 15, zy + 23);
		line(zx + 2, zy + 39, zx + 2 + za, zy + 44);
		line(zx - 2, zy + 39, zx - 2 + zb, zy + 44);
		strokeWeight(1);
	}
	noStroke();
	fill(200, 0, 0);
	rect(zx - 2, zy + 10, 4, 8);
	stroke(0);
}

function Zombie() {
	this.x = round(random(100, width - 100));
	this.plus = true;
	this.za = -5;
	this.zb = 5;
	this.y = round(random(100, height - 100));
	while (px < this.x + 100 && px > this.x - 100 && py < this.y + 100 && py > this.y - 100) {
		this.x = round(random(100, width - 100));
		this.y = round(random(100, height - 100));
	}
	this.display = function() {
		zom(this.x, this.y, this.dir, this.za, this.zb);
	};
	this.move = function() {
		if (px > this.x) {
			this.speedx = 1;
			this.dir = 1;
		}
		if (px == this.x) this.speedx = 0;
		if (px < this.x) {
			this.speedx = -1;
			this.dir = 0;
		}
		if (py > this.y) {
			this.speedy = 1;
		}
		if (py == this.y) this.speedy = 0;
		if (py < this.y) {
			this.speedy = -1;
		}
		if (this.plus == true) {
			this.za += 2;
			this.zb -= 2;
		} else {
			this.zb += 2;
			this.za -= 2;
		}
		if (this.za < -5) this.plus = true;
		if (this.za > 5) this.plus = false;

		this.x += this.speedx;
		this.y += this.speedy;
	};
	this.die = function() {
		if (px < this.x + 15 && px > this.x - 15 && py < this.y + 15 && py > this.y - 55) {
			if (invencible > 255) {
				vida--;
				invencible = 100;
			}
		}
	};
}

function Shot() {
	this.hit = 0;
	if (look == 3) {
		this.dirx = 0;
		this.diry = -5;
		this.x = px - 4;
		this.y = py + 27;
	}
	if (look == 1) {
		this.dirx = 5;
		this.diry = 0;
		this.x = px + 15;
		this.y = py + 20;
	}
	if (look == 2) {
		this.dirx = 0;
		this.diry = 5;
		this.x = px + 4;
		this.y = py + 27;
	}
	if (look == 0) {
		this.dirx = -5;
		this.diry = 0;
		this.x = px - 15;
		this.y = py + 20;
	}
	this.display = function() {
		fill(0);
		ellipse(this.x, this.y, 5, 5);
	};
	this.move = function() {
		this.x += this.dirx;
		this.y += this.diry;
	};
	this.hit = function() {
		for (var i = 0; i < zombie.length; i++) {
			if (this.x < zombie[i].x + 15 && this.x > zombie[i].x - 15 && this.y < zombie[i].y + 43 && this.y > zombie[i].y - 15) {
				this.hit = 1;
				var bagyesorno = random(9);
				if (bagyesorno > 7.5) {
					bag.push(new Bag());
					bag[bag.length - 1].x = zombie[i].x;
					bag[bag.length - 1].live = false;
					bag[bag.length - 1].y = zombie[i].y;
				}
				zombie.splice(i, 1);
			}
		}
		for (var i2 = 0; i2 < boss.length; i2++) {
			if (this.x < boss[i2].x + 15 * 2 && this.x > boss[i2].x - 15 * 2 && this.y < boss[i2].y + 43 * 2 && this.y > boss[i2].y - 15 * 2) {
				this.hit = 1;
				boss[i2].live--;
			}
			if (boss[i2].live < 1) {
				bag.push(new Bag());
				bag[bag.length - 1].live = true;
				bag[bag.length - 1].x = boss[i2].x;
				bag[bag.length - 1].y = boss[i2].y;
				boss.splice(i2, 1);
			}
		}
	};
}

function Bag() {
	this.howmuch = round(random(2, 8));
	this.boatopespepesial = round(random(10));
	this.display = function() {
		stroke(0);
		if (this.live == false) {
			if (this.boatopespepesial > 7.5) fill(0, 0, 100);
			else fill(0)
			rect(this.x, this.y, 12, 20);

			stroke(255);
			strokeWeight(2)
			line(this.x + 3, this.y + 2, this.x + 3, this.y + 16)
			line(this.x + 6, this.y + 2, this.x + 6, this.y + 16)
			line(this.x + 9, this.y + 2, this.x + 9, this.y + 16)
			strokeWeight(1)
		}
		if (this.live == true) head(this.x, this.y);
	};
}
