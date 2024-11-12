import React from 'react'
import { ACTIONS } from './App'

export default function Todo({ todo }) {
  return (
    <div>
      <button onClick={()=> dispatch({ type: ACTIONS.toggleToDo , payload: { id: todo.id }})}
      >Toggle</button>
      <button>Delete</button>
    </div>
  )
}
