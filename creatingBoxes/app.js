/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-action = 'render']");
const removeBtn = document.querySelector("button[data-action = 'destroy']");

const randomColor = function () {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256),
    color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
};

const createBoxes = function () {
  const boxesLength = document.querySelector("#boxes").children.length;

  if (boxesLength !== 0) {
    removeBoxes();
  }
  let inputValue = Number(document.querySelector("input").value);
  const container = document.createElement("DIV");
  container.classList.add("container");
  let widthBox = 20;
  let heightBox = 20;

  for (let i = 0; i < inputValue; i++) {
    const innerElement = document.createElement("DIV");
    heightBox += 10;
    widthBox += 10;
    innerElement.style.height = `${heightBox}px`;
    innerElement.style.width = `${widthBox}px`;
    innerElement.style.backgroundColor = randomColor();
    container.append(innerElement);
    boxes.append(container);
  }
};

const clearInput = function () {
  let input = document.querySelector("input");
  input.value = "";
};

const removeBoxes = function () {
  if (boxes.children.length === 0) {
    return;
  }
  const container = document.querySelector(".container");
  container.remove();
};

createBtn.addEventListener("click", createBoxes);
removeBtn.addEventListener("click", removeBoxes);
removeBtn.addEventListener("click", clearInput);
createBtn.addEventListener("click", clearInput);
