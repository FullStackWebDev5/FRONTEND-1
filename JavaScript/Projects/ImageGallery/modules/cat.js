import { imageContainer } from '../index.js'

export async function fetchCats() {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    const jsonRes = await res.json()
    displayCats(jsonRes)
  } catch(error) {
    console.log(error)
  }
}

export function displayCats(catsData) {
  imageContainer.innerHTML = ''
  catsData.forEach(cat => {
    const div = document.createElement('div')

    const img = document.createElement('img')
    img.src = cat.url

    div.append(img)
    imageContainer.append(div)
  })
}
