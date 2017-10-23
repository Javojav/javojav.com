function Shot(guna, numberofi) {
	this.hit = 0;
	if (look == 3) {
		this.dirx = 0;
		this.diry = -5;
		this.x = px - 4;
		this.y = py + 27;
		if (guna == 3 && numberofi == 1) {
			this.dirx++;
			this.diry--;
		}
		if (guna == 3 && numberofi == 2) {
			this.dirx+=2;
			this.diry-=2;
		}
		if (guna == 3 && numberofi == 3) {
			this.dirx-=2;
			this.diry-=2;
		}
		if (guna == 3 && numberofi == 4) {
			this.dirx--;
			this.diry--;
		}
		if (guna == 2 && numberofi == 1) {
			this.diry--;
		}
		if (guna == 2 && numberofi == 2) {
			this.diry-=2;
		}
	}
	if (look == 1) {
		this.dirx = 5;
		this.diry = 0;
		this.x = px + 15;
		this.y = py + 20;
		if (guna == 3 && numberofi == 1) {
			this.dirx++;
			this.diry++;
		}
		if (guna == 3 && numberofi == 2) {
			this.diry+=2;
		}
		if (guna == 3 && numberofi == 3) {
			this.dirx--;
			this.diry+=3;
		}
		if (guna == 3 && numberofi == 4) {
			this.dirx--;
			this.diry--;
		}
		if (guna == 2 && numberofi == 1) {
			this.dirx++;
		}
		if (guna == 2 && numberofi == 2) {
			this.dirx+=2;
		}
	}
	if (look == 2) {
		this.dirx = 0;
		this.diry = 5;
		this.x = px + 4;
		this.y = py + 27;
		if (guna == 3 && numberofi == 1) {
			this.dirx--;
			this.diry--;
		}
		if (guna == 3 && numberofi == 2) {
			this.dirx-=2;
			this.diry-=2;
		}
		if (guna == 3 && numberofi == 3) {
			this.dirx+=2;
			this.diry-=2;
		}
		if (guna == 3 && numberofi == 4) {
			this.dirx++;
			this.diry--;
		}
		if (guna == 2 && numberofi == 1) {
			this.diry++;
		}
		if (guna == 2 && numberofi == 2) {
			this.diry+=2;
		}
	}
	if (look == 0) {
		this.dirx = -5;
		this.diry = 0;
		this.x = px - 15;
		this.y = py + 20;
		if (guna == 3 && numberofi == 1) {
			this.dirx--;
			this.diry--;
		}
		if (guna == 3 && numberofi == 2) {
			this.diry-=2;
		}
		if (guna == 3 && numberofi == 3) {
			this.dirx++;
			this.diry-=3;
		}
		if (guna == 3 && numberofi == 4) {
			this.dirx++;
			this.diry++;
		}
		if (guna == 2 && numberofi == 1) {
			this.dirx--;
		}
		if (guna == 2 && numberofi == 2) {
			this.dirx-=2;
		}
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
				if (gun == true) {
					if (ammo.dam < zombie[i].live) {
						zombie[i].live-=ammo.dam;
								console.log(zombie[i].live)
					} else {
						zombie[i].live = 0;
								console.log(zombie[i].live)
					}
				}
				if (gun == false) {
					if (bigammo.dam < zombie[i].live) {
						zombie[i].live-=bigammo.dam;
								console.log(zombie[i].live)
					} else {
						zombie[i].live = 0;
						console.log(zombie[i].live)
					}
				}
			}
		}
		for (var i2 = 0; i2 < boss.length; i2++) {
			if (this.x < boss[i2].x + 15 * 2 && this.x > boss[i2].x - 15 * 2 && this.y < boss[i2].y + 43 * 2 && this.y > boss[i2].y - 15 * 2) {
				this.hit = 1;
				if (gun == true) {
					if (ammo.dam < boss[i2].live) {
						boss[i2].live-=ammo.dam;
												console.log(boss[i2].live);
					} else {
						boss[i2].live = 0;
												console.log(boss[i2].live);
					}
				}
				if (gun == false) {
					if (bigammo.dam < boss[i2].live) {
						boss[i2].live-=bigammo.dam;
						console.log(boss[i2].live);
					} else {
						boss[i2].live = 0;
												console.log(boss[i2].live);
					}
				}
			}
		}
	};
}

function Bag() {
	this.display = function() {
		stroke(0);
		fill(0);
		beginShape();
		vertex(this.x,this.y-10);
		vertex(this.x-5,this.y-15);
		vertex(this.x+5,this.y-15);
		endShape();
		ellipse(this.x, this.y, 20);
		stroke(255);
		textSize(10);
		text("$",this.x-2,this.y+2);
		strokeWeight(1)
	};
}
