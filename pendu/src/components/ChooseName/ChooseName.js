import { useState } from "react";
import { Link } from "react-router-dom";
// import './Game';
import './ChooseName.css'

function ChooseName() {

    let [fpseudo, setFpseudo] = useState("");

    let handleChangeFpseudo = (e) => {
        setFpseudo(e.target.value);
    };

    return (

        <div className="formulaire">
            <div className="Container_Form">
                <form>
                    <div className="Contain_Title">
                        <h1>Hangman Game</h1>
                        <h4>game developed By Ianis CHENNAF </h4>
                    </div>

                    <div className="Contain_input">
                        <div className="Input">
                        <label> Pseudo : </label>
                        <input type="text" value={fpseudo} onChange={handleChangeFpseudo} ></input>  
                        </div> 
                    </div>

                    <div className="Contain_button">
                        <div className="Button_item">
                            <Link to="/Game" state={{ pseudo: fpseudo}}>
                                <button type="submit" id="play" >Play !</button>
                            </Link>
                        </div>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default ChooseName