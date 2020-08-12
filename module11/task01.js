const refs = {
  btnStart: document.querySelector("button[data-action='start'"),
  btnStop: document.querySelector('button[data-action="stop"'),
};
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const setRandomColor = () => {
  const newColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(newColor);
  document.body.style.backgroundColor = newColor;
};

let interval = undefined;

refs.btnStart.addEventListener(
  "click",
  (e) =>
    (interval = interval ? interval : setInterval(() => setRandomColor(), 1000))
);
refs.btnStop.addEventListener("click", (e) => clearInterval(interval));
