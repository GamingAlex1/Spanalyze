const questions = [
    { question: "What is 'to run' in Spanish?", answer: "correr" },
    { question: "What is the past tense of 'hablar' for yo?", answer: "hablé" },
    // Add more questions...
];

function startQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = prompt(q.question);
        if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
            score++;
        }
    });
    alert(`You scored ${score} out of ${questions.length}`);
}
