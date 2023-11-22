import {useState} from 'react';

import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';

import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns){
  
  let currentPlayer = 'X';
  
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);
  // const[activePlayer, setActivePlayer] = useState('X');
  // cons[hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);
  
  let gameBoard = initialGameBoard;
  
  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){

  }

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    // const activePlayer = deriveActivePlayer(gameTurns);

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square:{row: rowIndex, col: colIndex}, player: currentPlayer },
         ...prevTurns,
      ];
        
      return updatedTurns;
    });
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive ={ activePlayer==='X' }></Player>
          <Player initialName="Player 2" symbol="O" isActive ={ activePlayer==='O' }></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns}/>
    </main>  
  );
}

export default App
