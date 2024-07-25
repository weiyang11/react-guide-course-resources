import React from 'react';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function dericeActivePlayer(gameTurns) {
  let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    // let gameBoard = initialGameBoard;
    let gameBoard = [...initialGameBoard.map(array => [...array])]; // deep copy

    for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;

    }
    return gameBoard;
}

function deriveWinner(gameBoard, player) {
  let winner = null;

  for (const conbinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[conbinations[0].row][conbinations[0].column];
    const secondSquareSymbol = gameBoard[conbinations[1].row][conbinations[1].column];
    const thirdSquareSymbol = gameBoard[conbinations[2].row][conbinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = player[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {

  const[player, setPlayer] = React.useState(PLAYERS);

  const [ gameTurns, setGameTurns] = React.useState([]);
  // const [ haswinner, setHasWinner ] = React.useState(false);
  // const [ activePlayer, setActivePlayer ] = React.useState('X');
  const activePlayer = dericeActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, player);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectedSquare(rowIndex, cellIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      const currentPlayer = dericeActivePlayer(prevTurns);
      // let currentPlayer = 'X';
      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O';
      // }
      const newTurns = [
        {square: {row:rowIndex , col:cellIndex}, player: currentPlayer}, ...prevTurns ];
      return newTurns;
    })
  }

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayer((prevPlayer) => {
      return {
        ...prevPlayer,
        [symbol]: newName,
      };
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className='highlight-player'>
        <Player initialName={PLAYERS.X} symbol="X"  isActive={activePlayer ==='X'} onChangeName= {handlePlayerNameChange}/>
        <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName= {handlePlayerNameChange}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
      <GameBoard onSelectSquare={handleSelectedSquare} board ={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>;
}

export default App
