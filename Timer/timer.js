var estart;
function timer() {
  estart = setInterval(pasa,10);
  function pasa() {
    milisec+=1;
    if (milisec == 100) {
      sec++;
      milisec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
    if (hour > 0) {
      if (sec > 9) {
        document.getElementById("tiempo").innerHTML = hour + ":" + min + ":" + sec;
      }
      if (sec < 10) {
        document.getElementById("tiempo").innerHTML = hour + ":" + min + ":" + "0" + sec;
      }
      var span = document.createElement('span');
      if (milisec < 10) {
        var val = document.createTextNode("0" + milisec);
      }
      if (milisec > 9 && milisec < 100) {
        var val = document.createTextNode(milisec);
      }
      span.appendChild(val);
      span.style.fontSize = "30px";
      document.getElementById("tiempo").appendChild(span);
    } else {
      if (sec > 9) {
        document.getElementById("tiempo").innerHTML = min + ":" + sec;
      }
      if (sec < 10) {
        document.getElementById("tiempo").innerHTML = min + ":" + "0" + sec;
      }
      var span = document.createElement('span');
      if (milisec < 10) {
        var val = document.createTextNode("0" + milisec);
      }
      if (milisec > 9 && milisec < 100) {
        var val = document.createTextNode(milisec);
      }
      span.appendChild(val);
      span.style.fontSize = "30px";
      document.getElementById("tiempo").appendChild(span);
    }
  }
}
