import "./Task.css";
import React from "react";

const Task = ({ task }) => {
  return (
    
      <div className="container-task">{task.title}</div>
    
  );
};

export default Task;
