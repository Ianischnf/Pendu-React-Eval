import React, { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";
import Alphabet from "../Alphabet/Alphabet";
import Hangman from "../Hangman/Hangman";
import Word from "../Word/Word";

const Game = () => {
  const {
    guessedLetters,
    lives,
    difficulty,
    startNewGame,
    gameIsWon,
    gameIsLost,
  } = useContext(GameContext);

  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  useEffect(() => {
    if (gameIsWon()) {
      alert("Vous avez gagné !");
      startNewGame();
    }
    if (gameIsLost()) {
      alert("Vous avez perdu !");
      startNewGame();
    }
  }, [guessedLetters, lives]);

  return (
    <div>
      <Word />
      <Hangman lives={lives} />
      <Alphabet />
    </div>
  );
};

export default Game;
