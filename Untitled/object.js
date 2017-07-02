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
				if (gun == true) {
					zombie[i].live-=ammo.dam;
				}
				if (gun == false) {
					zombie[i].live-=bigammo.dam;
				}
			}
			if (zombie[i].live < .1) {
				var bagyesorno = random(9);
				if (bagyesorno > 5) {
					bag.push(new Bag());
					bag[bag.length - 1].x = zombie[i].x;
					bag[bag.length - 1].dollars = int(random(25,70));
					bag[bag.length - 1].y = zombie[i].y;
					zombie.splice(i, 1);
				}
			}
		}
		for (var i2 = 0; i2 < boss.length; i2++) {
			if (this.x < boss[i2].x + 15 * 2 && this.x > boss[i2].x - 15 * 2 && this.y < boss[i2].y + 43 * 2 && this.y > boss[i2].y - 15 * 2) {
				this.hit = 1;
				if (gun == true) {
					boss[i2].live-=ammo.dam;
				}
				if (gun == false) {
					boss[i2].live-=bigammo.dam;
				}
			}
			if (boss[i2].live < .1) {
				bag.push(new Bag());
				bag[bag.length - 1].dollars = int(random(100,350));
				bag[bag.length - 1].x = boss[i2].x;
				bag[bag.length - 1].y = boss[i2].y;
				boss.splice(i2, 1);
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
