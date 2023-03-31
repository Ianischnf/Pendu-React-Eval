import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./Alphabet.css"

const Alphabet = () => {
  const { selectLetter } = useContext(GameContext);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterSelect = (letter) => {
    selectLetter(letter);
  };

  return (
    <div className="test">
      {alphabet.map((letter, index) => (
         <button type="button" class="simple" key={index} onClick={() => handleLetterSelect(letter)} >
          {letter}
         </button>
      ))}
    </div>
  );
};

export default Alphabet;
