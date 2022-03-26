/* Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */


const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFont = function(){
	console.log(input.value)
  text.style.fontSize = `${input.value}px`
}
input.addEventListener('input', changeFont)