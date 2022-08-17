import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducers"
import noteService from "../services/notes"

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? "important" : "Not important"}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()

  const notes = useSelector(({ filter, notes }) => {
    if (filter === "All") return notes
    return filter === "important"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  const toggleImportant = async (id) => {
    const note = notes.find((n) => n.id === id)
    console.log(note)
    const changedNote = { ...note, important: !note.important }
    // console.log(changedNote)
    const newNote = await noteService.updateNote(changedNote)
    console.log(newNote)
    dispatch(toggleImportanceOf(newNote))
  }

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportant(note.id)}
        />
      ))}
    </ul>
  )
}

export default Notes
