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
  }, 
  {
    question: 'JavaScript is a programming language used for...',
    options: ['Creating interactive websites', 'Running server-side scripts', 'Designing user interfaces', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'What is the name of the programming language primarily used for web development?',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    answer: 'JavaScript'
  },
  {
    question: 'The term "web development" refers to the process of...',
    options: ['Designing and creating websites', 'Designing and creating mobile applications', 'Designing and creating desktop applications', 'Designing and creating websites and mobile applications'],
    answer: 'Designing and creating websites and mobile applications'
  },
  {
    question: 'Which of the following is a fundamental concept in object-oriented programming?',
    options: ['Class', 'Method', 'Variable', 'Object'],
    answer: 'Object'
  },
  {
    question: 'Which of the following is not a characteristic of a good software engineer?',
    options: ['Writing efficient code', 'Using design patterns', 'Maintaining good documentation', 'Solving complex problems'],
    answer: 'Solving complex problems'
  }, 
  {
    question: 'Which of the following is a fundamental concept in functional programming?',
    options: ['Function', 'Variable', 'Class', 'Object'],
    answer: 'Function'
  }, 
  {
    question: 'Which of the following is one the methods to deep copy an object in JavaScript?',
    options: ['Object.create()', 'JSON.stringify()', 'Object.keys()', 'Object.values()'],
    answer: 'JSON.stringify()'
  }
]

let index = 0
const optionsContainer = document.getElementById('options-container')
const totalScore = questions.length
let score = 0

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
        score++
      } else {
        div.style.backgroundColor = '#DC3545'
        alert(`Unfortunately, that's incorrect!`)
        document.getElementById('correct-answer').style.backgroundColor = '#198754'
      }

      if(index < questions.length - 1) {
        document.getElementById('next-btn').style.visibility = 'visible'
      } else {
        quizCompleted()
      }
    })

    optionsContainer.append(div)
  })
}

const nextBtn = document.getElementById('next-btn')
nextBtn.addEventListener('click', () => {
  optionsContainer.innerHTML = ''

  index = index + 1
  showQuizQuestion()

  document.getElementById('next-btn').style.visibility = 'hidden'
})

const startQuiz = () => {
  document.getElementById('start-btn').style.display = 'none'
  document.getElementById('quiz-container').style.display = 'block'
  showQuizQuestion()
}

const quizCompleted = () => {
  document.getElementById('quiz-container').style.display = 'none'
  document.getElementById('quiz-completed').style.display = 'block'
  document.getElementById('final-score').innerText = `${score}/${totalScore}`
}


/*
  # Explore:
    Pass arguments to callback function
*/