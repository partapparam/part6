import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createNote, toggleImportanceOf } from "./reducers/noteReducers"

const Note = (props) => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ""
    dispatch(createNote(content))
  }

  return (
    <div className="App">
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default Note
