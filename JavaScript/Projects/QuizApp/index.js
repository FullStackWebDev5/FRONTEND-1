const questions = [
  {
    question: 'Which of the three banks will be merged with the other two to create India’s third-largest bank?',
    options: ['Punjab National Bank', 'Indian Bank', 'Bank of Baroda', 'Dena Bank'],
    answer: 'Indian Bank'
  },
  {
    question: 'HTML stands for',
    options: ['HighText Machine Language', 'HyperText and links Markup Language', 'HyperText Markup Language', 'None of these'],
    answer: 'HyperText Markup Language'
  },
  {
    question: 'CSS stands for',
    options: ['Cascading Style Sheets', 'Coloured Style Sheets', 'Color and Style Sheets', 'None of these'],
    answer: 'Cascading Style Sheets'
  }
]

const startQuiz = () => {
  const firstQuestion = questions[0]

  const questionArea = document.getElementById('question')
  questionArea.innerText = firstQuestion.question

  const optionsContainer = document.getElementById('options-container')

  firstQuestion.options.forEach((option) => {
    const div = document.createElement('div')
    div.classList.add('options')
    div.innerText = option

    if(option == firstQuestion.answer) {
      div.id="correct-answer"
    }

    div.addEventListener('click', function () {
      if(option == firstQuestion.answer) {
        div.style.backgroundColor = '#198754'
        alert(`Hooray! That's correct!`)
      } else {
        div.style.backgroundColor = '#DC3545'
        alert(`Unfortunately, that's incorrect!`)
        document.getElementById('correct-answer').style.backgroundColor = '#198754'
      }
    })

    optionsContainer.append(div)
  })
}

startQuiz()