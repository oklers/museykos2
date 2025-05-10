
const quizData = [
  {
    question: {
      ru: "Кто первым вышел в открытый космос?",
      en: "Who was the first to perform a spacewalk?",
      de: "Wer war der erste Mensch im Weltraumspaziergang?"
    },
    answers: [
      { text: "Алексей Леонов", correct: true },
      { text: "Юрий Гагарин", correct: false },
      { text: "Герман Титов", correct: false }
    ]
  }
  // Добавить другие вопросы
];

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  quizData.forEach((item, index) => {
    const qBlock = document.createElement('div');
    qBlock.innerHTML = `<p>${item.question['ru']}</p>`;
    item.answers.forEach(ans => {
      const btn = document.createElement('button');
      btn.textContent = ans.text;
      btn.onclick = () => {
        alert(ans.correct ? "Правильно!" : "Неправильно!");
      };
      qBlock.appendChild(btn);
    });
    container.appendChild(qBlock);
  });
}

document.addEventListener('DOMContentLoaded', renderQuiz);
