//big
var ak = {
  pos: 1,
  capa: 31,
  dam: .5
}

function reloadbig() {
  if (biggun == 1) {
  	if (wait == 75 && bigammo.total > 0) {
  		var left = bigammo.ingun;
  		bigammo.ingun = 31;
  		bigammo.total -= 31;
  		bigammo.total += left;
  		if (bigammo.total < 31) {
  			bigammo.ingun += bigammo.total
  			if (bigammo.ingun > 31) {
  				bigammo.total = bigammo.ingun - 31;
  				bigammo.ingun = 31;
  			}
  		}
  	}
  }
}

//small
var gun = {
  pos: 1,
  capa: 8,
  dam: .75
}

var revolver = {
  pos: 2,
  capa: 6,
  dam: 1.25
}

function reloadsmall() {
  if (smallgun == 1) {
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
  if (smallgun == 2) {
    if (wait == 100 && ammo.total > 0) {
      var left = ammo.ingun;
      ammo.ingun = 6;
      ammo.total -= 6;
      ammo.total += left;
      if (ammo.total < 6) {
        ammo.ingun += ammo.total
        if (ammo.ingun > 6) {
          ammo.total = ammo.ingun - 6;
          ammo.ingun = 6;
        }
      }
    }
  }
}
