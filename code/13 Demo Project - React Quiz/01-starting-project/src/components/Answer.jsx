import {useRef} from 'react';

export default function Answer({answer, selectedAnswers, answerState, onSelect }) {

  const shuffledAnswers = useRef();

  if(!shuffledAnswers.current){
    shuffledAnswers.current = [...answer];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
    {shuffledAnswers.current.map((answer) =>  {
      let cssClasses = '';
      const isSelected = selectedAnswers === answer;

      if(answerState === 'answer' && isSelected ){
        cssClasses = 'selected';
      }
      if((answerState === 'correct' || answerState === 'wrong') && isSelected){
        cssClasses = answerState;
      }

      return (
        <li key={answer} className="answer">
          <button onClick={() => onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>
            {answer}
          </button>
        </li>
      )
      }
      )}
  </ul>
  )
}
