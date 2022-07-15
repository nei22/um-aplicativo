import React, { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import Button from "./Components/Button";
import Tasks from "./Components/Tasks";

function App() {
  // let message = "hello world!"
  const [tasksings] = useState([
    {
      id: "1",
      title: "Estudar Reacct-Js!!!!",
      completed: true,
    },
    {
      id: "2",
      title: "Ler mais livros!!",
      completed: true,
    },
    {
      id: "3",
      title: "EstudoooooooU",
      completed: true,
    },
    {
      id: "4",
      title: "Ler mais!!@@@",
      completed: true,
    },
    {
      id: "5",
      title: "EsReac!!!!",
      completed: true,
    },
    {
      id: "6",
      title: "LeMaiVros!!",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Button />
        <Tasks tasks={tasksings} />
      </div>
    </>
  );
}

export default App;
