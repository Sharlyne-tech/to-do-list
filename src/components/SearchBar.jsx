import React, { useState } from 'react';

function SearchBar({ setTodo }) {
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    if (!task.trim()) return; 

    try {
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ title: task }),
      });

      if (!response.ok) throw new Error('Failed to add task');

      const newTodo = await response.json();
      setTodo((prev) => [...prev, newTodo]); 
      setTask(''); 
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ADD TASK"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default SearchBar;