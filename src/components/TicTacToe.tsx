// import React, { useState } from 'react';
// import Square from './Square';

// const TicTacToe: React.FC = () => {
//   const initialSquares: (string | null)[] = Array(9).fill(null);
//   // @ts-ignore
//   const [squares, setSquares] = useState(initialSquares);
//   const [xNext, setXNext] = useState<boolean>(true);

//   const handleClick = (index: number): void => {
//     if (squares[index] || theWinner(squares)) {
//       return;
//     }

//     const squareUpdate: (string | null)[] = [...squares];
//     squareUpdate[index] = xNext ? 'X' : 'O';
//     setSquares(squareUpdate);
//     setXNext(!xNext);
//   };

//   const resetBoard = (): void => {
//     setSquares(initialSquares);
//     setXNext(true);
//   };

//   const theWinner = (squares: (string | null)[]): string | null => {
//     // Your implementation for calculating the winner
//     return null;
//   };

//   const winner: string | null = theWinner(squares);
//   let status: string;
//   if (winner) {
//     status = `The Winner is: ${winner} Player`;
//   } else if (squares.every((square) => square !== null)) {
//     status = 'Draw!! Please restart the game.';
//   } else {
//     status = `Player ${xNext ? 'X' : 'O'} turn`;
//   }

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {squares.map((value, index) => (
//         <Square key={index} value={value} onClick={() => handleClick(index)} />
//       ))}
//       <div className="col-span-3 text-center">
//         <p>{status}</p>
//         <button onClick={resetBoard} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Reset Game Board
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TicTacToe;
