import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswer }) {

  const skipped = userAnswer.filter((answer) => answer === null);
  const correct = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

  const skippedAnswersShare = Math.round((skipped.length / userAnswer.length) * 100);

  const correctAnswersShare = Math.round((correct.length / userAnswer.length) * 100);

  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;


  return (
    <div id='summary'>
    <img src={quizCompleteImg} alt="Trophy icon"/>
    <h2>Quiz Completed!</h2>
    <div id="summary-stats">
      <p>
        <span className="number">{skippedAnswersShare}%</span>
        <span className="text">skipped</span>
      </p>
      <p>
        <span className="number">{correctAnswersShare}%</span>
        <span className="text">answered correctly</span>
      </p>
      <p>
        <span className="number">{wrongAnswersShare}%</span>
        <span className="text">answered incorrectly</span>
      </p>
    </div>
    <ol>
      {userAnswer.map((answer, index) => {
      let cssClasses = 'user-answer';

      if(answer === null){
        cssClasses += ' skipped';
      }else if (answer === QUESTIONS[index].answers[0]){
        cssClasses += ' correct';
      }else {
        cssClasses += ' wrong';
      }

        return(
          <li key={index}>
            <h3>{index + 1}</h3>
            <p className="question">{QUESTIONS[index].text}</p>
            <p className={cssClasses}>{answer ?? 'Skipped'}</p>
          </li>
        );
      })}
    </ol>
  </div>
  )
}
