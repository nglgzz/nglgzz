const timer = document.querySelector('#timer');
let time = { minutes: 0, seconds: 0 };
let interval;

function parseInput(raw) {
  return {
    minutes: Number(raw.slice(0, -2)) || 0,
    seconds: Number(raw.slice(-2)),
  };
}

function formatTime({ minutes, seconds }) {
  let str = 'in ';

  if (minutes) {
    str += `${minutes} minute${minutes === 1 ? '' : 's'}`;
  }
  if (minutes && seconds) {
    str += ' and';
  }
  if (seconds) {
    str += ` ${seconds} second${seconds === 1 ? '' : 's'}`;
  }

  return str;
}

function tick() {
  const { seconds, minutes } = time;
  timer.textContent = formatTime(time);

  time = {
    minutes: minutes - !seconds,
    seconds: seconds ? seconds - 1 : 59,
  };

  if (!time.minutes && !time.seconds) {
    clearInterval(interval);
    timer.textContent = 'any time soon';
  }
}

function startTimer(event) {
  event.preventDefault();

  const timeInput = document.querySelector('#timeInput');
  timeInput.style.display = 'none';
  time = parseInput(timeInput.value || '700');

  interval = setInterval(tick, 1000);
  tick();
}
