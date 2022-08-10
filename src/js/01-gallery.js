// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery")
const galleryItem = galleryItems.map((galleryItem) =>
`
  <a class="gallery__item" href="${galleryItem.original}">
    <img
      class="gallery__image" src="${galleryItem.preview}"
      alt="${galleryItem.description}"
      />
  </a>`).join("");


gallery.innerHTML = galleryItem;

/*gallery.insertAdjacentHTML("afterbegin", galleryItem);*/

new SimpleLightbox (".gallery a", {captionDelay:250})
;
console.log(galleryItems);
