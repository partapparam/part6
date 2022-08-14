const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "newNote":
      return [...state, action.data]
    //   return state.concat(action.data)
    case "toggleImportant": {
      const id = action.data.id
      const noteToChange = state.find((note) => note.id === id)
      console.log(noteToChange)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      const ns = state.map((note) => {
        return note.id !== id ? note : changedNote
      })
      console.log(ns)
      return ns
    }

    default:
      return state
  }
}

const generateId = () => {
  return Math.random() * 1000000
}

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content,
      important: false,
      id: generateId(),
    },
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: { id },
  }
}

export default noteReducer
