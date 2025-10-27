import { useState } from 'react';
import "./styles.css";
// const squareData = [
//   { title: 'button 1', displayText: 1, id: 1 },
//   { title: 'button 2', displayText: 2, id: 2 },
//   { title: 'button 3', displayText: 3, id: 3 },
//   { title: 'button 4', displayText: 4, id: 4 },
//   { title: 'button 5', displayText: 5, id: 5 },
//   { title: 'button 6', displayText: 6, id: 6 },
//   { title: 'button 7', displayText: 7, id: 7 },
//   { title: 'button 8', displayText: 8, id: 8 },
//   { title: 'button 9', displayText: 9, id: 9 },
// ];

// Square component: Shows a single square. It needs to know its `value` (X, O, or empty) and what to do `onSquareClick`.
function Square({value, onSquareClick}:{value:string, onSquareClick: () => void}) {
  // We pass `value` from the Board to display, and `onSquareClick` to tell the Board when this square is clicked.
  return (<button type="button" className="square" onClick={onSquareClick}>{value}</button>);
}

// Board component: This is the main game area, managing all squares and game logic.
export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  // `squares` stores the state of all 9 squares, allowing React to re-render when a square changes.
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // `handleClick` is called when any square is clicked. It updates the game board.
  function handleClick(i: number) {
    // We create a new array to represent the next state of the squares.
    // This is important because React needs a *new* object to detect changes and re-render efficiently.
    const nextSquares = squares.slice();

    //returns early to check if the square already has an 'X' or 'O'
    //or if the game is already won
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // Tell React to update the squares, which will make the board re-render with the new 'X'.
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    console.log(nextSquares);  
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return (
    <>
      {/* Each `Square` component is rendered here. We give each square its current value and a function to call when it's clicked. */}
      {/* The `() => handleClick(index)` pattern ensures `handleClick` is called with the correct index only when the square is clicked. */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

      <div className="status">{status}</div>
    </>
  );
}

//function to calculate the winner
function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
