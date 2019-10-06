import React from "react";
import NavBar from "./components/navbar";
import Scoreboard from "./components/scores";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Scoreboard />
      </main>
    </React.Fragment>
  );
}

export default App;
