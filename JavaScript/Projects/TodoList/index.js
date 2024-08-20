const newTaskInput = document.getElementById('new-task')

newTaskInput.addEventListener('input', (event) => {
  const newTask = event.target.value
  const addBtn = document.getElementById('add-task')
  if(newTask) {
    addBtn.removeAttribute('disabled')
  } else {
    addBtn.setAttribute('disabled', true)
  }
})

function addTask() {
  const newItem = document.getElementById('new-task').value

  const shoppingList = document.getElementById('shopping-list')
  const li = document.createElement('li')
  li.innerText = newItem
  shoppingList.append(li)

  document.getElementById('new-task').value = ''
}