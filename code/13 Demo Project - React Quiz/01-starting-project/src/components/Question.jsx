import QuestionTimer from "./QuestionTimer"
import Answer from "./Answer"

export default function Question({questionText, answers, onSelectAnswer, selectedAnswer, answerState, onSkipAnswer}){
  return (
    <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer}/>
        <h2>{questionText}</h2>
        <Answer answer={answers} selectedAnswers={selectedAnswer} answerState={answerState} onSelect={onSelectAnswer}/>
      </div>
  )
}
