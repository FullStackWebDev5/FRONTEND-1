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

let index = 0
const optionsContainer = document.getElementById('options-container')

const showQuizQuestion = () => {
  const currentQuestion = questions[index]

  const questionArea = document.getElementById('question')
  questionArea.innerText = currentQuestion.question

  currentQuestion.options.forEach((option) => {
    const div = document.createElement('div')
    div.classList.add('options')
    div.innerText = option

    if(option == currentQuestion.answer) {
      div.id="correct-answer"
    }

    div.addEventListener('click', function () {
      if(option == currentQuestion.answer) {
        div.style.backgroundColor = '#198754'
        alert(`Hooray! That's correct!`)
      } else {
        div.style.backgroundColor = '#DC3545'
        alert(`Unfortunately, that's incorrect!`)
        document.getElementById('correct-answer').style.backgroundColor = '#198754'
      }

      if(index < questions.length - 1) {
        document.getElementById('next-btn').style.visibility = 'visible'
      }
    })

    optionsContainer.append(div)
  })
}

showQuizQuestion()

const nextBtn = document.getElementById('next-btn')
nextBtn.addEventListener('click', () => {
  optionsContainer.innerHTML = ''

  index = index + 1
  showQuizQuestion()

  document.getElementById('next-btn').style.visibility = 'hidden'
})


/*
  # Explore:
    Pass arguments to callback function
*/