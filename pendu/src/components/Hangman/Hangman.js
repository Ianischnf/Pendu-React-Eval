import React from "react";
import Pendu0 from "../../assets/mario1.png"
import Pendu1 from "../../assets/mario2.png"
import Pendu2 from "../../assets/mario3.png"
import Pendu3 from "../../assets/mario4.png"
import Pendu4 from "../../assets/mario5.png"
import Pendu5 from "../../assets/mario6.png"
import Pendu6 from "../../assets/mario7.png"
import "./Hangman.css"
import { useLocation } from "react-router-dom";


const Hangman = ({ lives }) => {
  const images = [
    Pendu6,
    Pendu5,
    Pendu4,
    Pendu3,
    Pendu2,
    Pendu1,
    Pendu0,
  ];



  return (
    <div className="Container_Hangame">
       <div className="Hangman">
       
        <img src={images[lives]} alt={`Hangman - ${lives} vies restantes`} />
      </div>
    </div>
   
  );
};

export default Hangman;
