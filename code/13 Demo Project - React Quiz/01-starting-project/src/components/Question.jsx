import QuestionTimer from "./QuestionTimer"
import { useState } from "react"
import Answer from "./Answer"
import QUESTIONS from '../questions.js'

export default function Question({questionIndex, onSelectAnswer, onSkipAnswer}){

  const [answer,setAnswer] = useState({
    selectedAnswer: null,
    isCorrect: null
  });

  let timer = 10000;

  if(answer.selectedAnswer){
    timer = 1000;
  }

  if (answer.isCorrect !== null){
    timer = 2000;
  }

  function handleSelectAnswer(answer){
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    });
    setTimeout(()=> {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000)
    }, 1000)
  }

  let answerState = '';

  if(answer.selectedAnswer && answer.isCorrect !== null){
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer){
    answerState = 'answer';
  }


  return (
    <div id="question">
        <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === null ? onSkipAnswer: null} mode={answerState}/>
        <h2>{QUESTIONS[questionIndex].text}</h2>
        <Answer answer={QUESTIONS[questionIndex].answers} selectedAnswers={answer.selectedAnswer} answerState={answerState} onSelect={handleSelectAnswer}/>
      </div>
  )
}
