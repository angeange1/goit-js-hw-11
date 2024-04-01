import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

import { gallery } from "../main"
import { images } from "../main"

export function renderImages(images) {
  if (!images.length) {
    iziToast.error({
      message: `❌ Sorry, there are no images matching your search query. Please try again!`
    })
  }
  gallery.innerHTML = ""
  const markup = images.map((image) => {
    return `<li class="image-item">
      <a href="${image.largeImageURL}">
        <img
          src="${image.webformatURL}"
          data-source="${image.largeImageURL}"
          alt="${image.tags}"
        />
        <ul class="image-description">
          <li>
            <h3>Likes</h3>
            <p><b>${image.likes}</b></p>
          </li>
          <li>
            <h3>Views</h3>
            <p><b>${image.views}</b></p>
          </li>
          <li>
            <h3>Comments</h3>
            <p><b>${image.comments}</b></p>
          </li>
          <li>
            <h3>Downloads</h3>
            <p><b>${image.downloads}</b></p>
          </li>
        </ul>
      </a>
    </li>`
  })
    .join("")

  gallery.insertAdjacentHTML("beforeend", markup)

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });

  lightbox.refresh()
}