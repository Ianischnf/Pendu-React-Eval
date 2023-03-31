import React from "react";
import GameContextProvider from "./contexts/GameContext";
import Game from "./components/Game/Game";

function App() {
  return (
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  );
}

export default App;
