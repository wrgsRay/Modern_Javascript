const correctAnswer = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
const finalScore = document.querySelector('span')
let score = 0

form.addEventListener('submit', e => {
    e.preventDefault()

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25
        }
    })
    scrollTo(0,0)
    result.classList.remove('d-none')
    // finalScore.textContent = `${score}%`

    let output = 0
    const resultAnimation = setInterval(() => {
        finalScore.textContent = `${output}%`
        if(output === score) {
            clearInterval(resultAnimation)
        } else {
            output++
        }
    }, 10)
})

form.addEventListener('reset', () => {
    result.classList.add('d-none')
    score = 0
})
