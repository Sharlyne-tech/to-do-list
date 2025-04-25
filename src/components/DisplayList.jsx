import React, { useEffect, useState } from 'react';
import Delete from './Delete';

function DisplayList({ todos, setTodo }) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('`http://localhost:3000/todos');
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [setTodo]);

  
  const handleDelete = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  
  const handleChange = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 🧱 Render a single item
  const renderTodoItem = (todo) => (
    <div className="list" key={todo.id}>
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <li className={todo.completed ? 'strike' : ''}>{todo.title}</li>
      <Delete onDelete={handleDelete} id={todo.id} />
    </div>
  );

  if (loading) return <p>Loading ......</p>;

  return (
    <div>
      {todos.length === 0 ? (
        <p>No tasks to show.</p>
      ) : (
        <ol>{todos.map(renderTodoItem)}</ol>
      )}
    </div>
  );
}

export default DisplayList;