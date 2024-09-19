import { imageContainer } from '../index.js'

export async function fetchDogs() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random/10')
    const jsonRes = await res.json()
    displayDogs(jsonRes.message)
  } catch(error) {
    console.log(error)
  }
}

export function displayDogs(dogsData) {
  imageContainer.innerHTML = ''
  dogsData.forEach(dog => {
    const div = document.createElement('div')

    const img = document.createElement('img')
    img.src = dog

    div.append(img)
    imageContainer.append(div)
  })
}
