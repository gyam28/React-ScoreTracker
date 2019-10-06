import React from "react";
import NavBar from "./components/navbar";
import Scoreboard from "./components/scores";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <div className="content"></div>
        <Scoreboard />
      </main>
    </React.Fragment>
  );
}

export default App;
