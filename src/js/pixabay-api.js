import { inputValue } from "../main"
import {showLoader} from "../main"

export function fetchImages() {
  const searchParams = new URLSearchParams({
    key: "43138394-89c4115d2b9d73778d19dc685",
    q: inputValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  })
  const url = `https://pixabay.com/api/?${searchParams}`

  showLoader()

  return fetch(url).then(response => {
    if (!response.ok) {throw new Error(response.status)}
    return response.json()
  })

}