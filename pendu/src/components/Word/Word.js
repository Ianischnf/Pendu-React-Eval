import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./Word.css";

const Word = () => {
  const { word, guessedLetters } = useContext(GameContext);

  return (
    <div className="Global_Contain_Word">
      <div className="Contain_Word">
        <div className="Word">
          {word.split("").map((letter, index) => (
            <span className="letter" key={index}>
              {guessedLetters.includes(letter) ? letter : "_ "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Word;
