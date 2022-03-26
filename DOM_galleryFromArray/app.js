/* Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.*/
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGallery = function(attributes){
	const gallery = document.querySelector('#gallery');
  
  const temp = document.createElement('UL');
  images.map(el => {
  temp.insertAdjacentHTML('beforeend',`<li class='list-item'><img src = ${el.url} alt = ${el.alt}></>`)
 /*  const listElement = document.createElement('LI'); */
/*   listElement.classList.add("list-item");
  const img = document.createElement('IMG');
  img.setAttribute('src',el.url);
  img.setAttribute('ALT', el.alt);
  listElement.append(img); */
  temp.classList.add("gallery");
 /*  temp.append(listElement); */
  
  })
  gallery.replaceWith(temp)
  
}
createGallery(images)


