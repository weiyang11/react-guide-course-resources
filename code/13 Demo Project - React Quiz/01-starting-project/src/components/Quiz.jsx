import { useState, useCallback } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question';


export default function Quiz(){


  const [answerState, setAnswerState] = useState('');
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback (function handleSelectAnswer(selectedAnswer)
  {
    setAnswerState('answer');
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    setTimeout(() => {
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(()=> {
        setAnswerState('');
      }, 2000)
    }, 1000);
  }, [activeQuestionIndex]);

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
      <Question key={activeQuestionIndex} questionText= {QUESTIONS[activeQuestionIndex].text} answers = {QUESTIONS[activeQuestionIndex].answers} onSelectAnswer={handleSelectAnswer} answerState={answerState} selectedAnswer={userAnswer[userAnswer.length-1]} onSkipAnswer={handleSkipAnswer}/>
    </div>

  )
};
