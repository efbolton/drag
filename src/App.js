import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";

// https://www.w3schools.com/HTML/html5_draganddrop.asp
// https://w3collective.com/drag-drop-react/

function App() {
  const [state, setState] = useState({
    clue: ["red", "x"],
    choiceA: ["rouge", "x"],
    choiceC: ["vert", ""],
    choiceD: ["jaune", ""],
    choiceE: ["blue", ""],
    choiceF: ["rose", ""],
    choiceB: ["orange", ""],
  });

  const [itemDragged, setItemDragged] = useState({
    value: "",
    status: "",
  });
  const allowDrop = (ev) => {
    console.log("allowDrop");
    //ev.preventDefault();
    //console.log("xx: ", itemDragged.status);
    // if (itemDragged.status === ev.target.id) {
    if (itemDragged.status === "x") {
      ev.preventDefault();
    }
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    setItemDragged(ev.target.id);
    const status = document.getElementById(ev.target.id).getAttribute("status");
    //console.log(status);
    setItemDragged({
      ...itemDragged,
      value: ev.target.textContent,
      status: status,
      // status: ev.target.id,
    });
  };

  const drop = (ev) => {
    //ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    //console.log(data, ev.target.id);
  };
  return (
    <div>
      <p>
        Match the French word with the English translation by dragging one over
        the other:
      </p>
      {/* dropbox */}
      <div
        className="dropBox"
        id={state.clue[1]}
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
      >
        {state.clue[0]}
      </div>
      <br />
      {/* choiceA */}
      <div
        id={state.choiceA[0]}
        status={state.choiceA[1]}
        draggable
        onDragStart={(e) => drag(e)}
      >
        {state.choiceA[0]}
      </div>
      <br />
      <br />
      <div
        id={state.choiceB[0]}
        status={state.choiceB[1]}
        draggable
        onDragStart={(e) => drag(e)}
      >
        {state.choiceB[0]}
      </div>
    </div>
  );
}

export default App;
