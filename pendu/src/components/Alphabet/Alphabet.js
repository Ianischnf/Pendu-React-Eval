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
    <div className="Contain_Alphabet">
      <div className="Contain_Letters">
           {alphabet.map((letter, index) => (
         <span class='video-game-button'  key={index} onClick={() => handleLetterSelect(letter)}>
          {letter}
         </span>
      ))}
      </div>
     
    </div>
  );
};

export default Alphabet;
{/* <button type="button" class="simple" key={index} onClick={() => handleLetterSelect(letter)} >
          {letter}
         </button> */}