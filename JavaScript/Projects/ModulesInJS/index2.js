function displayUser(user) {
  const container = document.getElementById('container')

  const div = document.createElement('div')
  div.innerHTML = `
    <img src="${user.avatar}" alt="User Avatar">
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>${user.email}</p>
  `

  container.appendChild(div)
}

// Named export
export { displayUser }