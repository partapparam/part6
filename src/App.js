import logo from "./logo.svg"
import "./App.css"
import React from "react"
import Note from "./Note"
import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "./reducers/noteReducers"

function App({ store }) {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state)
  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id))
  }
  // store.subscribe(() => {
  //   const stateNow = store.getState()
  //   console.log("this is the state now", stateNow)
  // })

  // console.log(store.getState())
  // store.dispatch({ type: "increment" })
  // store.dispatch({ type: "increment" })
  // store.dispatch({ type: "increment" })

  // console.log(store.getState())
  return (
    <div className="App">
      <Note />
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportant(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
