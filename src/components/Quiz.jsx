import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  // Highlight Selected Anaswers
  // const [answerState, setAnswerState] = useState("");
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    // setAnswerState("answered");
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    // Highlight selected answer continuation setting the secnds if the corrected or wrong answers was chosen
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // if (!shuffledAnswers.current) {
  //   shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.current.sort(() => Math.random() - 0.5);
  // }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
      {/* <div id="question"> */}
      {/* <QuestionTimer
          // FOR THE TIMER TO CONTINUE WHEN SKIPPED TO THE NEXT QUESTION AND TO RECREATE A COMPONENT
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2 id="last-try">{QUESTIONS[activeQuestionIndex].text}</h2> */}
      {/* <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }

            if (
              (answerState === "correct" || answerState === "wrong") &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                  disabled={answerState !== ""}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul> */}
      {/* <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        /> */}
    </div>
    // </div>
  );
}
