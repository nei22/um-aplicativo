import React from "react";
import Task from "./Task";
import"./Tasks.css"
const Tasks = ({ tasks }) => {
    return (
        <div className="texto">
            {tasks.map((task) => 
                <Task task={task} />
            )}
        </div>
    )
}
export default Tasks;