// Todo.jsx
import React from 'react';
import { ACTIONS } from './App';

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => dispatch({ type: ACTIONS.toggleToDo, payload: { id: todo.id } })}
      />
      <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
        {todo.name}
      </span>
      <button
        onClick={() => dispatch({ type: ACTIONS.deleteToDo, payload: { id: todo.id } })}
        disabled={!todo.complete}
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
}
