import React, { createContext, useState } from "react";
import words from "../data/words.json";

export const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(6);
  const [difficulty, setDifficulty] = useState("normal");

  const startNewGame = () => {
    const newWord = words[difficulty][Math.floor(Math.random() * words[difficulty].length)];
    setWord(newWord.toUpperCase());
    setGuessedLetters([]);
    setLives(6);
  };

  const selectLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setLives(lives - 1);
      }
    }
  };

  const gameIsWon = () => {
    if (!word) {
      return false;
    }
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };
  const gameIsLost = () => {
    return lives === 0;
  };

  const value = {
    word,
    guessedLetters,
    lives,
    difficulty,
    startNewGame,
    selectLetter,
    gameIsWon,
    gameIsLost,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
