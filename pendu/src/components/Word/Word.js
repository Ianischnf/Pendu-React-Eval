import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./Word.css";
import { useLocation } from "react-router-dom";

const Word = () => {
  const { word, guessedLetters } = useContext(GameContext);

  let location = useLocation();
  let pseudo = location.state["pseudo"];

  return (
    <div className="Global_Contain_Word">
      <div className="left_item">
        <div className="item_right">
          <p>Hello {pseudo}</p>
        </div>
      </div>
      <div className="right_item">
          {word.split("").map((letter, index) => (
            <span className="letter" key={index}>
              {guessedLetters.includes(letter) ? letter : "_ "}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Word;
