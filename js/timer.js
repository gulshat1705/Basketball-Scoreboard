let minutes = 0;
let seconds = 0;
let timer;

function boardTimer() {
  timer = setInterval(run, 1000);
}

function run() {
  if (seconds < 10) {
    document.getElementById('sec').innerHTML = '0' + seconds;
  } else {
    document.getElementById('sec').innerHTML = seconds;
  }

  if (minutes < 10) {
    document.getElementById('min').innerHTML = '0' + minutes;
  } else {
    document.getElementById('min').innerHTML = minutes;
  }

  if (seconds < 59) {
    seconds += 1;
  } else {
    seconds = 0;
    minutes += 1;
  }
}

boardTimer();
