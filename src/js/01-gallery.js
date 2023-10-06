// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', markup(galleryItems))
gallery.addEventListener('click', handlerClick)


function markup(arr) { 
    return arr.map(({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `).join('');
}
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function handlerClick(event) {
    event.preventDefault();
}

console.log(galleryItems);

