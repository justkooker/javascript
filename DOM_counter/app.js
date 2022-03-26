/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
class Counter {
  constructor() {
    this.value = document.querySelector("#value");

    this.counterValue = 0;
  }

  decrement = function () {
    this.counterValue -= 1;
    this.value.textContent = this.counterValue;
  };
  increment = function () {
    this.counterValue += 1;
    this.value.textContent = this.counterValue;
  };
}
const counter = new Counter();

decrementButton.addEventListener("click", counter.decrement.bind(counter));
incrementButton.addEventListener("click", counter.increment.bind(counter));
