import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState('All');

  function onDeleteClick(taskText) {
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  const tasksToDisplay = tasks.filter(task => (
    category === 'All' || task.category === category
  ))

  function handleFormSubmit(newTask) {
    console.log('from app: ', newTask)
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category}
        onSetSelectCategory={setCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList 
        tasks={tasksToDisplay} 
        onDeleteClick={onDeleteClick} 
      />
    </div>
  );
}

export default App;
