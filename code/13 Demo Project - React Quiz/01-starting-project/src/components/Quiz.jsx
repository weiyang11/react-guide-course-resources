import { useState, useCallback } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';


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

  const shuffledAsnwers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAsnwers.sort(( ) => Math.random() - 0.5);


  return(
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAsnwers.map((answer) =>  {
            let cssClasses = '';
            const isSelected = userAnswers[userAnswers.length - 1] === answer;

            if(answerState === 'answered' && isSelected ){
              cssClasses = 'selected';
            }
            if((answerState === 'correct' || answerState === 'wrong') && answer === QUESTIONS[activeQuestionIndex].answers[0]){
              cssClasses = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>
                  {answer}
                </button>
              </li>
            )
            }
            )}
        </ul>
      </div>
    </div>

  )
};
