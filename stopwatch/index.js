let timer = 0;
let intervalId;

const renderUI = (time = 0) => {
  let timerNode = document.getElementById("timer");
  timerNode.innerHTML = time;
  //   timerNode.innerHTML =new Date().toLocaleTimeString()// time;
};

function stop() {
  clearInterval(intervalId);
}

function reset() {
  clearInterval(intervalId);
  timer = 0;
  renderUI(timer);
}

function start() {
  intervalId = setInterval(function () {
    console.log("timer", timer);
    timer += 1;
    renderUI(timer);
  }, 1000);
}
// start()

class Stopwatch {
  constructor() {
    this.timer = 0;
    this.intervalId = undefined;
  }

  renderUI(time = this.timer) {
    const timerNode = document.getElementById("timer");
    timerNode.innerHTML = time;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  reset() {
    this.stop();
    this.timer = 0;
    this.renderUI();
  }

  start() {
    if (this.intervalId) return;

    this.intervalId = setInterval(() => {
      this.timer++;
      this.renderUI();
    }, 1000);
  }
}

const stopwatch = new Stopwatch();
