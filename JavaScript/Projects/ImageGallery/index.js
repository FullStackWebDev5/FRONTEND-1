import { fetchUsers } from './modules/user.js'
import { fetchCats } from './modules/cat.js'
import { fetchDogs } from './modules/dog.js'

const usersTab = document.getElementById('users-tab')
const catsTab = document.getElementById('cats-tab')
const dogsTab = document.getElementById('dogs-tab')
export const imageContainer = document.getElementById('image-container')

usersTab.addEventListener('click', selectUsersTab)
catsTab.addEventListener('click', selectCatsTab)
dogsTab.addEventListener('click', selectDogsTab)

export function selectUsersTab() {
  resetSelection()
  usersTab.classList.add('selected')
  fetchUsers()
}

function selectCatsTab() {
  resetSelection()
  catsTab.classList.add('selected')
  fetchCats()
}

function selectDogsTab() {
  resetSelection()
  dogsTab.classList.add('selected')
  fetchDogs()
}

function resetSelection() {
  usersTab.classList.remove('selected')
  catsTab.classList.remove('selected')
  dogsTab.classList.remove('selected')
}






















// fetch('https://reqres.in/api/users?per_page=10')
//   .then((res) => res.json())
//   .then((res) => console.log(res.data))
//   .catch((error) => console.log(error))