var itime = 0;
var milisec = 0;
var timerunning = false;
var sec = 0;
var min = 0;
var hour = 0;
var start = 1;
function less() {
  if (itime > 0 && timerunning == false) {
    itime-=5;
    document.getElementById("waitsometime").innerHTML = itime;
  }
}
function more() {
  if (timerunning == false) {
    itime+=5
    document.getElementById("waitsometime").innerHTML = itime;
  }
}

function go() {
  start++;
  if (start % 2 == 0) {
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    timerunning = true;
    if (itime > 0) {
      var demasiadosnombresenestamierda = setInterval(unsegundomenos,1000);
    } else {
      timer();
    }
    function unsegundomenos() {
      itime--;
      document.getElementById("waitsometime").innerHTML = itime;
      if (itime < 4) {
        document.getElementById("waitsometime").style.color = "red";
      }
      if (itime < 1) {
        timer();
        document.getElementById("waitsometime").style.color = "white";
        clearInterval(demasiadosnombresenestamierda);
      }
    }
  } else {
    clearInterval(estart);
    itime = 0;
    timerunning = false;
    document.getElementById("waitsometime").style.color = "white";
  }
}
