const quizData = [{
 question: 'What is the capital city of kenya',
 a: 'Nairobi',
 b: 'mombasa',
 c: 'Kisumu',
 d: 'nyeri',
 correct: 'a'
},
 {
 question: 'Which is the capital city of Tanzania',
 a: 'Dodoma',
 b: 'Arusha',
 c: 'Mwanza',
 d: 'Dar',
 correct: 'a'
 },
 {
  question: 'How many countries are in Africa',
  a: '64',
  b: '54',
  c: '48',
  d: '63',
  correct: 'b'
 },
 {
  question: 'How many countries are in the world',
  a: '164',
  b: '154',
  c: '148',
  d: '195',
  correct: 'd'
 }
]
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')

let currentQuiz = 0;
loadQuiz();
function loadQuiz() {
 const currentQuizData = quizData[currentQuiz];
 questionEl.innerText = currentQuizData.question
 a_text.innerText =currentQuizData.a
 b_text.innerText = currentQuizData.b
 c_text.innerText = currentQuizData.c
 d_text.innerText = currentQuizData.d
 currentQuiz++
}


