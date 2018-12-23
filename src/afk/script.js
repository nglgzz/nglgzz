const element = document.querySelector('#timer');
const colors = ['#c6ff00', 'red', 'white'];

function random(start, end, int) {
  let rand = Math.random() * (end - start) + start;

  if (int) {
    rand = Math.floor(rand);
  }

  return rand;
}


let time = 15;

function writeTime(minutes, seconds) {
  element.textContent = '';
  if (minutes !== 0) {
    element.textContent += minutes + ':';
  }

  if (seconds < 10) {
    element.textContent += '0' + seconds;
  } else {
    element.textContent += seconds;
  }

  console.log(element.textContent, element)
}

function timeIsUp() {
  setInterval(() => {
    element.style.color = colors[random(0, colors.length, true)];
    element.style.transform = 'rotate(' + random(-3, 3, false) + 'deg)';
    element.style.fontSize = random(2.5, 5, false) + 'em';
  }, 50);
}

function parseInput(time) {
  const splitTime = time.split(':');

  if (splitTime.length === 2) {
    return (Number(splitTime[0]) * 60) + Number(splitTime[1]);
  }

  return Number(splitTime[0]) * 60;
}

function startTimer(event) {
  event.preventDefault();
  const timeInput = document.querySelector('#time');

  if (!timeInput.value) {
    time = parseInput('7');
  } else {
    time = parseInput(timeInput.value);
  }

  const interval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    console.log(minutes, seconds)

    writeTime(minutes, seconds);

    time = time - 1;
    if (time <=  0) {
      clearInterval(interval);
      element.textContent = 'Time\'s up! ☠';

      timeIsUp();
    }
  }, 1000);
}





