import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteClick }) {

  const taskElements = tasks.map((task) => (
    <Task 
      key={task.text} 
      text={task.text} 
      category={task.category}
      onDeleteClick={onDeleteClick} 
    />
  ))
  return (
    <div className="tasks">
      {taskElements}
    </div>
  );
}

export default TaskList;
