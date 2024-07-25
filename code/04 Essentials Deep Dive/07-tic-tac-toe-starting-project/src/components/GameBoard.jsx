import React from 'react';


export default function GameBoard({onSelectSquare, board}) {

  // let gameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const {square, player} = turn;
  //   const {row, col} = square;
  //   gameBoard[row][col] = player;

  // }
  // const [gameBoard, setGameBoard] = React.useState(initialGameBoard);

  // function handleClick(rowIndex, cellIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //     return newGameBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id= "game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}><button onClick= { () => onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button></li>
            ))}
          </ol>
        </li>
      ))}

    </ol>
  );
}
