import React, { useEffect, useState } from 'react';

const TIMER = 3000;

export default function ProgressBar() {
  const [remainmingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainmingTime} max={TIMER}/>

}
