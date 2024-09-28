import { imageContainer } from '../index.js'

export async function fetchUsers() {
  try {
    const res = await fetch('https://reqres.in/api/users?per_page=10')
    const jsonRes = await res.json()
    displayUsers(jsonRes.data)
  } catch(error) {
    console.log(error)
  }
}

export function displayUsers(usersData) {
  imageContainer.innerHTML = ''
  usersData.forEach(user => {
    const div = document.createElement('div')

    const img = document.createElement('img')
    img.src = user.avatar

    div.append(img)
    imageContainer.append(div)
  })
}
