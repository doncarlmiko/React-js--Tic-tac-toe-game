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

function Square() {
  //Using useState to remember the information when the button is clicked.
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X');
  }
  return (<button type="button" className="square" onClick={handleClick}>{value}</button>);
}

export default function Board() {
  // const buttonList = squareData.map(
  //   square => 
  //     <button type="button" title={square.title} className="square">{square.displayText}</button>
  // );
  
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>

      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}
