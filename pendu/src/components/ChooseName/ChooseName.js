import { useState } from "react";
import { Link } from "react-router-dom";
import './ChooseName.css';

function ChooseName() {

    //Variables pour les paramètres du jeu
    let [fpseudo, setFpseudo] = useState("");

    //Functions pour gérer les cas de changemens lors de la saisies des valeurs
    let handleChangeFpseudo = (e) => {
        setFpseudo(e.target.value);
    };


    return (
        <div className="formular">
            <div className="Container_Form">
                <form>
                    <div className="Contain_Title">
                        <h1>Hangman Game : </h1>
                        <h4>Jeu développé par Ianis CHENNAF</h4>
                    </div>

                    <div className="Contain_input">
                        <label> Pseudo : </label>
                        <input type="text"></input>  
                    </div>

                    <div className="Contain_button">
                    <Link to="" state={{ pseudo: fpseudo,}}>
                        <button type="submit" id="play">Play !</button>
                    </Link>
                    </div>
                    
                </form>

                    {/* condition : si un des inputs est vide, le jeu ne commence pas, géré via les Links (qui en gros sont des routes plus ou moins) */}
                   
                        
                    

              

            </div>

        </div>
    )
}

export default ChooseName