import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "./reducers/noteReducers"

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? "important" : ""}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  // const notes = useSelector((state) => {
  //   if ((state.filter = "All")) {
  //     return state.notes
  //   }

  //   return state.filter === "important"
  //     ? state.notes.filter((note) => note.important)
  //     : state.notes.filter((note) => !note.important)
  // })

  const notes = useSelector(({ filter, notes }) => {
    if (filter === "All") return notes
    return filter === "important"
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })
  console.log(notes)

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  )
}

export default Notes
