import React from "react";
import GameContextProvider from "./contexts/GameContext";
import Game from "./components/Game/Game";
import ChooseName from "./components/ChooseName/ChooseName";
import { Route, Routes } from "react-router-dom";
// import ChooseName from "./components/ChooseName";


function App() {
  return (
     
      <GameContextProvider>
        <Routes>
          <Route path='/' element={<ChooseName/>} />
          <Route path='Game' element={<Game/>} />
        </Routes>
    </GameContextProvider>

  
  );
}

export default App;
