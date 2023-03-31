import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./Word.css";

const Word = () => {
  const { word, guessedLetters } = useContext(GameContext);

  return (
    <div className="word">
      {word.split("").map((letter, index) => (
        <span className="letter" key={index}>
          {guessedLetters.includes(letter) ? letter : "_ "}
        </span>
      ))}
    </div>
  );
};

export default Word;
