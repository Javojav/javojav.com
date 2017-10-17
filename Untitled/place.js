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
	if (room == 0) {
		//next level door
		rect(width - 80, height / 2 - 100, 5, 200);
		if (level > 0) rect(75, height / 2 - 100, 5, 200);
		if (next == 0) {
			fill(0)
			rect(width - 100, height / 2 - 100, 25, 200);
		}
		//shop door
		rect(width/2 - 100, 75, 200, 5);
		if (next == 0) {
			fill(0)
			rect(width/2 - 100, 75, 200, 25);
		}
		//get in shop
		if (px < width/2 + 100 && px > width/2 - 100 && py < 75 && next == 0) {
			room = 1;
			py = height - 150;
		}
	}
	if (room == 1) {
		//shop door
		rect(width/2 - 100, height-75, 200, -25);
		//get out of shop
		if (px < width/2 + 100 && px > width/2 - 100 && py > height-130) {
			room = 0;
			py = 100;
		}
	}
}

function shop() {
	player(width/2,175,2,0,1);
	fill(139,69,19);
	rect(75,200,650,50);
	head(width/2,225);
	gunammobag(width/2-75-6,215);
	akammobag(width/2+75-6,215);
	revolver1(width/2-150-8,220);
	bigbig1(width/2+225-20,218);
	gunwithnoname1(width/2-305,220);
	gun1(width/2-225,220);
	ak1(width/2+140,220);
	shotgun1(width/2+290,220);
	fill(100,0,0);
	stroke(0);
	rect(width/2-25,250,50,25);
	rect(width/2-75-25,250,50,25);
	rect(width/2+75-25,250,50,25);
	rect(width/2+150-25,250,50,25);
	rect(width/2+225-25,250,50,25);
	rect(width/2+300-25,250,50,25);
	rect(width/2-150-25,250,50,25);
	rect(width/2-225-25,250,50,25);
	rect(width/2-300-25,250,50,25);
	textSize(10);
	fill(255);
	text("500$",width/2-11,245);
	text("100$",width/2-85,245);
	text("200$",width/2+65,245);
	text("400$",width/2-150-8,245);
	text("400$",width/2-305-8,245);
	text("300$",width/2-225-8,245);
	text("400$",width/2+140-3,245);
	text("600$",width/2+210,245);
	text("600$",width/2+290,245);
}

function buy() {
	if (px > width/2-25 && px < width/2+25 && py > 200 && py < 300 && money > 499) {
		vida++;
		money-=500;
	}
	if (px > width/2-100 && px < width/2-50 && py > 200 && py < 300 && money > 99) {
		if (smallgun == 1) {
			ammo.total+=16;
		}
		if (smallgun == 2) {
			ammo.total+=12;
		}
		if (smallgun == 3) {
			ammo.total+=24;
		}
		money-=100;
	}
	if (px > width/2+50 && px < width/2+100 && py > 200 && py < 300 && money > 199) {
		if (biggun == 1) {
			bigammo.total+=31;
		}
		if (biggun == 2) {
			bigammo.total+=50;
		}
		if (biggun == 3) {
			bigammo.total+=8;
		}
		money-=200;
	}
	if (px > width/2-175 && px < width/2-125 && py > 200 && py < 300 && money > 399 && smallgun != 2) {
		ammo = {
			ingun: 6,
			total: 30,
			dam: 1.25
		}
		smallgun = 2;
		money-=400;
	}
	if (px > width/2-250 && px < width/2-200 && py > 200 && py < 300 && money > 399 && smallgun != 1) {
		ammo = {
			ingun: 8,
			total: 40,
			dam: 0.75
		},
		smallgun = 1;
		money-=400;
	}
	if (px > width/2-325 && px < width/2-275 && py > 200 && py < 300 && money > 399 && smallgun != 3) {
		ammo = {
			ingun: 12,
			total: 48,
			dam: 0.5
		},
		smallgun = 3;
		money-=400;
	}
	if (px > width/2+125 && px < width/2+175 && py > 200 && py < 300 && money > 399 && biggun != 1) {
		bigammo = {
			ingun: 31,
			total: 62,
			dam: 0.5
		},
		biggun = 1;
		money-=400;
	}

	if (px > width/2+200 && px < width/2+250 && py > 200 && py < 300 && money > 599 && biggun != 2) {
		bigammo = {
			ingun: 100,
			total: 100,
			dam: 0.2
		},
		biggun = 2;
		money-=600;
	}

	if (px > width/2+275 && px < width/2+325 && py > 200 && py < 300 && money > 599 && biggun != 3) {
		bigammo = {
			ingun: 8,
			total: 24,
			dam: 1.25
		},
		biggun = 3;
		money-=600;
	}
}
