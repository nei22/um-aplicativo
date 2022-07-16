import "./Task.css";
import React from "react";

const Task = ({ task, handleTaskClick,handleTaskDelition }) => {
  return (
    <div
      className="container-task"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskDelition(task.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
