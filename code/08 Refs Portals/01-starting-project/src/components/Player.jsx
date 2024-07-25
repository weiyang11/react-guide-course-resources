import React from 'react';

export default function Player() {

  const playerName = React.useRef();

  const [enteredPlayerName, setEnteredPlayerName] = React.useState(null);
  // const [submitted, setSubmitted] = React.useState(false);

  // function handleChanhge(event) {
  //   setEnteredPlayerName(event.target.value);
  //   setSubmitted(false);
  // }

  function handleClick() {
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
