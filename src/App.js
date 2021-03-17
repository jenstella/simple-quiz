import { useState } from "react";

function App() {
  //this part could potentially be set up as an api that I fetch from
  const questions = [
    {
      questionText: "What is the capitol of Vermont?",
      answerOptions: [
        //array of possible answers
        { answerText: "Burlington", isCorrect: false },
        { answerText: "Waterbury", isCorrect: false },
        { answerText: "Montpelier", isCorrect: true },
        { answerText: "Essex", isCorrect: false },
      ],
    },
    {
      questionText: "What color is not in the rainbow?",
      answerOptions: [
        { answerText: "Red", isCorrect: false },
        { answerText: "Indigo", isCorrect: false },
        { answerText: "Violet", isCorrect: false },
        { answerText: "Magenta", isCorrect: true },
      ],
    },
    {
      questionText: "What is the largest state?",
      answerOptions: [
        { answerText: "California", isCorrect: false },
        { answerText: "Alaska", isCorrect: true },
        { answerText: "Texas", isCorrect: false },
        { answerText: "Montana", isCorrect: false },
      ],
    },
    {
      questionText: "What is the national flower of the United States?",
      answerOptions: [
        { answerText: "Rose", isCorrect: true },
        { answerText: "Sunflower", isCorrect: false },
        { answerText: "Daisy", isCorrect: false },
        { answerText: "Peony", isCorrect: false },
      ],
    },
    {
      questionText: "How many national parks are there in the US?",
      answerOptions: [
        { answerText: "423", isCorrect: true },
        { answerText: "652", isCorrect: false },
        { answerText: "374", isCorrect: false },
        { answerText: "183", isCorrect: false },
      ],
    }
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
