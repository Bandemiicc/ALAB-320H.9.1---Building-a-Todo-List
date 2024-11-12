import { useState, useReducer } from 'react'
import './App.css'
import Todo from './Todo'

export const ACTIONS = {
  newToDo: "addToDo",
  toggleToDo: "toggleToDo",

}


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.newToDo:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.toggleToDo:
      return todo.map(todo => {
        if (todo.id === action.payload.id){
          return{...todo, complete: !todo.complete}
        }
        return todo
      })
  }

  console.log(todos)

  function newToDo(name) {
    return { id: Date.now(), name: name, complete: false }
  }

}

function App() {
  const [todo, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTIONS.newToDo, payload: { name: name } })
    setName('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todo.map(todo => {
       return  <Todo key={todo.id} todo={todo} dispatch/>
})}
    </>
  )
}

export default App
