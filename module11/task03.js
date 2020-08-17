// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 17, 2019"),
// });
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minsRef: document.querySelector('span[data-value="mins"]'),
  secsRef: document.querySelector('span[data-value="secs"]'),
};
const targetDate = new Date("Jul 17, 2021");
let newTime = {};
const timer = {
  start() {
    setInterval(() => {
      updateClockface();
      updateTime();
    }, 1000);
  },
};
timer.start();

function updateClockface() {
  const currentDate = Date.now();
  const time = targetDate - currentDate;
  newTime.days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  newTime.hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  newTime.mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  newTime.secs = pad(Math.floor((time % (1000 * 60)) / 1000));
}
function updateTime() {
  refs.daysRef.textContent = `${newTime.days}`;
  refs.hoursRef.textContent = `${newTime.hours}`;
  refs.minsRef.textContent = `${newTime.mins}`;
  refs.secsRef.textContent = `${newTime.secs}`;
}
function pad(value) {
  return String(value).padStart(2, "0");
}

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
