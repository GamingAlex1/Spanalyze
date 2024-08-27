const verbs = [
    { verb: 'abrir', options: ['abro', 'abres', 'abre'], correct: 'abro' },
    { verb: 'aprender', options: ['aprendo', 'aprendes', 'aprende'], correct: 'aprendo' },
    { verb: 'bailar', options: ['bailo', 'bailas', 'baila'], correct: 'bailo' },
    // Add more verbs following the same pattern
];

let currentQuestion = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    loadScore();
});

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const verb = verbs[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question">Conjugate the verb <strong>${verb.verb}</strong></div>
        <ul class="options">
            ${verb.options.map(option => `<li><input type="radio" name="option" value="${option}">${option}</li>`).join('')}
        </ul>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === verbs[currentQuestion].correct) {
            score++;
            saveScore();
        }

        currentQuestion++;
        if (currentQuestion < verbs.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }
}

function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score}</p>
        <button onclick="resetQuiz()">Restart Quiz</button>
    `;
}

function saveScore() {
    localStorage.setItem('conjugationScore', score);
}

function loadScore() {
    const savedScore = localStorage.getItem('conjugationScore');
    if (savedScore) {
        score = parseInt(savedScore);
        document.getElementById('score-container').innerText = `Score: ${score}`;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    saveScore();
    loadQuestion();
    document.getElementById('score-container').innerText = `Score: ${score}`;
}
