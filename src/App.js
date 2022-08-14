import logo from "./logo.svg"
import "./App.css"
import { createStore } from "redux"
import React from "react"
import Note from "./Note"

function App() {
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "increment":
        return state + 1
      case "decrease":
        return state - 1
      case "zero":
        return 0
      default:
        return state
    }
  }
  const store = createStore(counterReducer)
  store.subscribe(() => {
    const stateNow = store.getState()
    console.log("this is the state now", stateNow)
  })

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ""
    store.dispatch({
      type: "newNote",
      data: {
        content,
        important: false,
        id: generateId(),
      },
    })
  }

  const toggleImportant = (id) => {
    store.dispatch({
      type: "toggle",
      data: { id },
    })
  }

  console.log(store.getState())
  store.dispatch({ type: "increment" })
  store.dispatch({ type: "increment" })
  store.dispatch({ type: "increment" })

  console.log(store.getState())
  return (
    <div className="App">
      <Note />
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      <ul>
        {store.getState().map((note) => (
          <li key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
