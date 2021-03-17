import { useState } from "react";

function App() {
  //this part could potentially be set up as an api that we fetch from
  const questions = [
    {
      questionText: "What state do I live in?",
      answerOptions: [
        //array of possible answers
        { answerText: "Oregon", isCorrect: false },
        { answerText: "Connecticut", isCorrect: false },
        { answerText: "Vermont", isCorrect: true },
        { answerText: "California", isCorrect: false },
      ],
    },
    {
      questionText: "What is my dog's name?",
      answerOptions: [
        { answerText: "Rex", isCorrect: false },
        { answerText: "Ranger", isCorrect: false },
        { answerText: "Sophie", isCorrect: false },
        { answerText: "Both 1 & 2", isCorrect: true },
      ],
    },
    {
      questionText: "What is my favorite color?",
      answerOptions: [
        { answerText: "purple", isCorrect: false },
        { answerText: "turquoise", isCorrect: true },
        { answerText: "mauve pink", isCorrect: false },
        { answerText: "blue", isCorrect: false },
      ],
    },
    {
      questionText: "What is my least favorite animal?",
      answerOptions: [
        { answerText: "crocodile", isCorrect: true },
        { answerText: "snake", isCorrect: false },
        { answerText: "bat", isCorrect: false },
        { answerText: "mouse", isCorrect: false },
      ],
    },
  ];

  //using state to set the current question from the questions array by index
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //starts at false bc at beginning of game, there's no score yet. changes to true at end to show score
  const [showScore, setShowScore] = useState(false);
  //state to track score
  const [score, setScore] = useState(0);

  //whenever a button is clicked, it sets to go to the next question
  function handleAnswerButton(isCorrect) {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    let nextQuestion = currentQuestion + 1;
    //if the question # is bigger than the length of the array, it stops bc quiz is over
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  //handles the reset button functionality
  function handleResetButton() {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div className="App">
      {/* ternary to render either score screen or quiz screen */}
      {showScore ? (
        <>
          <div className="score-section">
            You score {score} out of {questions.length}
          </div>
          <button onClick={handleResetButton}>Reset</button>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              //the onclick sends it to the next question
              <button
                onClick={() => handleAnswerButton(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
