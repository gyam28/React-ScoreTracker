import React from "react";
import NavBar from "./components/navbar";
import Scoreboard from "./components/scores";
import "./App.css";

function App() {
  return (
    <React.Fragment
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch"
      }}
    >
      <NavBar />
      <main className="container">
        <Scoreboard />
      </main>
    </React.Fragment>
  );
}

export default App;
