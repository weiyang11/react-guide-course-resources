import { useState, useCallback } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question';


export default function Quiz(){


  // const [answerState, setAnswerState] = useState('');
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex =  userAnswer.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer)
  {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), [handleSelectAnswer]
  );

  if(quizIsComplete){
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt="Trophy icon"/>
        <h2>Quiz Completed!</h2>
      </div>
    )
  }


  return(
    <div id="quiz">
      <Question key={activeQuestionIndex} questionIndex={activeQuestionIndex}  onSelectAnswer={handleSelectAnswer}  onSkipAnswer={handleSkipAnswer}/>
    </div>

  )
};
