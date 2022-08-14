import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createNote, toggleImportanceOf } from "./reducers/noteReducers"

const Note = ({ store }) => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state)

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ""
    dispatch(createNote(content))
  }

  const toggleImportant = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  store.dispatch({
    type: "newNote",
    data: {
      content: "this is note",
      important: true,
      id: 1,
    },
  })

  store.dispatch({
    type: "newNote",
    data: {
      content: "state changes are made with actions",
      important: false,
      id: 2,
    },
  })

  return (
    <div className="App">
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
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

export default Note
