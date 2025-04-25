import React from 'react';

function Delete({ onDelete, id }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete the task');
      }

      await response.json(); 
      onDelete(id); 
    } catch (error) {
      console.error('Delete error:', error.message);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default Delete;