import React from 'react';
import ResultModal from './ResultModal';

  // let timer;

export default function TimerChallenge({title, targetTime}){

  const timer = React.useRef();
  const dialog = React.useRef();

  // const [timerActive, setTimerActive] = React.useState(false)
  // const [timerExpired, setTimerExpired] = React.useState(false)

  const[timeRemaining, setTimeRemaining] = React.useState(targetTime * 1000);
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart(){
    timer.current= setInterval(() => {
      // setTimerExpired(true);
      // dialog.current.open();
      setTimeRemaining(prevTime => prevTime - 10);
    } , 10);

    // setTimerActive(true);
  }

  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);
    // setTimerActive(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime= {targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>

        <p className='challenge-time'>
          {targetTime} second{targetTime > 1? 's' : ''}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerActive? 'active' : undefined}>
          {timerActive ? 'Time is running...': 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
