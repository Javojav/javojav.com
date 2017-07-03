function player(px, py, l, movelegs, other) {
	stroke(0);
	//noStroke();
	if (other == 0) {
		fill(0, invencible);
		stroke(0);
	} else {
		fill(255);
		stroke(255);
	}
	ellipse(px, py, 30, 30);
	if (other == 0) {
		stroke(0);
		fill(255, invencible);
	} else {
		fill(0);
		noStroke();
	}
	if (l == 1) {
		ellipse(px + 7, py - 2, 5, 5);
		if (other == 0) {
			stroke(0);
			fill(0, invencible);
		} else {
			fill(255);
			stroke(255);
		}
		rect(px - 6, py + 18, 12, 20);
		strokeWeight(3);
		line(px, py + 23, px + 12, py + 23);
		if (gun == true) {
			if (smallgun == 1) {
				gun1(px+10,py+20);
			}
			if (smallgun == 2) {
				revolver1(px+10,py+15);
			}
			strokeWeight(3);
		}
		if (gun == false) {
			if (biggun == 1) {
				ak1(px+10,py+17);
			}
			if (biggun == 2) {
				bigbig1(px+10,py+13);
			}
			strokeWeight(3);
		}
		strokeWeight(3);
		if (movelegs == 1) {
			line(px - 2, py + 39, px - 2 + a, py + 44);
			line(px + 2, py + 39, px + 2 + b, py + 44);
		} else {
			line(px - 2, py + 39, px - 2 - 5, py + 44);
			line(px + 2, py + 39, px + 2 + 5, py + 44);
		}
		strokeWeight(1);
	}
	if (l === 0) {
		ellipse(px - 7, py - 2, 5, 5);
		if (other == 0) {
			stroke(0);
			fill(0, invencible)
		} else {
			fill(255);
			stroke(255);
		}
		rect(px - 6, py + 18, 12, 20);
		strokeWeight(3);
		line(px, py + 23, px - 12, py + 23);
		if (gun == true) {
			if (smallgun == 1) {
				gun2(px-10,py+20);
			}
			if (smallgun == 2) {
				revolver2(px-10,py+15);
			}
			strokeWeight(3);
		}
		if (gun == false) {
			if (biggun == 1) {
				ak2(px-10,py+17);
			}
			if (biggun == 2) {
				bigbig2(px-10,py+13);
			}
			strokeWeight(3);
		}
		if (movelegs == 1) {
			line(px + 2, py + 39, px + 2 + a, py + 44);
			line(px - 2, py + 39, px - 2 + b, py + 44);
		} else {
			line(px - 2, py + 39, px + 2 + 5, py + 44);
			line(px + 2, py + 39, px - 2 - 5, py + 44);
		}
		strokeWeight(1);
	}
	if (l == 2) {
		ellipse(px - 6, py - 2, 5, 5);
		ellipse(px + 6, py - 2, 5, 5);
		if (other == 0) {
			stroke(0);
			fill(0, invencible);
		} else {
			fill(255);
			stroke(255);
		}
		rect(px - 8, py + 18, 16, 20);
		strokeWeight(3);
		if (movelegs == 1) {
			line(px - 5, py + 39, px - 5, py + 45 + a);
			line(px + 5, py + 39, px + 5, py + 45 + b);
		}
		else {
			line(px - 5, py + 39, px - 5, py + 45 + 10);
			line(px + 5, py + 39, px + 5, py + 45 + 10);
		}
		strokeWeight(1);
	}
	if (l == 3) {
		if (other == 0) {
			fill(0, invencible);
			stroke(0);
		} else {
			fill(255);
			stroke(255);
		}
		rect(px - 8, py + 18, 16, 20);
		strokeWeight(3);
		if (movelegs == 1) {
			line(px - 5, py + 39, px - 5, py + 45 + a);
			line(px + 5, py + 39, px + 5, py + 45 + b);
		}
		else {
			line(px - 5, py + 39, px - 5, py + 45 + 10);
			line(px + 5, py + 39, px + 5, py + 45 + 10);
		}
		strokeWeight(1);
	}
	rect(px - 2, py + 10, 4, 8);
	stroke(0);
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

function gunammobag(x, y) {
	fill(0);
	stroke(0);
	rect(x, y, 12, 20);
	stroke(255);
	strokeWeight(1);
	line(x + 3, y + 2, x + 3, y + 16);
	line(x + 6, y + 2, x + 6, y + 16);
	line(x + 9, y + 2, x + 9, y + 16);
	strokeWeight(1);
}

function akammobag(x, y) {
	stroke(0);
	fill(0, 0, 100);
	rect(x, y, 12, 20);
	stroke(255);
	strokeWeight(1);
	line(x + 3, y + 2, x + 3, y + 16);
	line(x + 6, y + 2, x + 6, y + 16);
	line(x + 9, y + 2, x + 9, y + 16);
	strokeWeight(1);
}
