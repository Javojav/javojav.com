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
