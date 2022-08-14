import React from "react"
import { createStore } from "redux"

const Note = () => {
  const noteReducer = (state = [], action) => {
    switch (action.type) {
      case "newNote":
        return state.concat(action.data)

      default:
        return state
    }
  }

  const noteStore = createStore(noteReducer)

  noteStore.dispatch({
    type: "newNote",
    data: {
      content: "this is note",
      important: true,
      id: 1,
    },
  })

  noteStore.dispatch({
    type: "newNote",
    data: {
      content: "state changes are made with actions",
      important: false,
      id: 2,
    },
  })

  return (
    <div>
      <ul>
        {noteStore.getState().map((note) => (
          <li key={note.id}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Note
