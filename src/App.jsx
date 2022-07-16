import React, { useState } from "react";
import "./App.css";
import { v4 as uuiv4 } from "uuid";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App() {
  // let message = "hello world!"
  const [tasks, setTasks] = useState([
    { id: "1", title: "Estudar Programação", completed: true },
    { id: "2", title: "Ler Livros", completed: false },
  ]);
  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTask);
  };
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuiv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  const handleTaskDelition = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  return (
    <div className="app-container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks 
      tasks={tasks} 
      handleTaskClick={handleTaskClick} 
      handleTaskDelition={handleTaskDelition}
      />
    </div>
  );
}

export default App;
