import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

import { fetchImages } from "./js/pixabay-api"
import { renderImages } from "./js/render-functions"

export const gallery = document.querySelector('ul.gallery')
export let images
export let inputValue

const form = document.querySelector("form")
const searchInput = document.querySelector("input")
const searchBtn = document.querySelector("button")
const loader = document.querySelector(".loading")

export const showLoader = () => {
    loader.style.display = "flex"
}

const hideLoader = () => {
  loader.style.display = "none"
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  inputValue = event.target.elements.search.value.trim()
  if (!inputValue.length) {
    gallery.innerHTML = ""
    iziToast.info({
      message: "Please fill the field",
    })
  }

  fetchImages()
    .then((images) => renderImages(images.hits))
    .catch((error) => console.log(error)) 
}
)
