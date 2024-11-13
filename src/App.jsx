import { useState, useReducer } from 'react'
import './App.css'
import Todo from './Todo'

export const ACTIONS = {
  newToDo: "addToDo",
  toggleToDo: "toggleToDo",
  deleteTodo: "deleteTodo"

}


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.newToDo:
      return [...todos, newToDo(action.payload.name)]
    case ACTIONS.toggleToDo:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      })
    case ACTIONS.deleteTodo:
      return todos.filter(todo => {
        return todo.id !== action.payload.id || !todo.complete;
      });
    default: return todos;
  }


  console.log(todos)

  function newToDo(name) {
    return { id: Date.now(), name: name, complete: false }
  }

}



function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.newToDo, payload: { name: name } })
    setName('')
  }
  return (
    <>
      <h1>To-Do List ⬆️</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}

export default App
