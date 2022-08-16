const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

const noteReducer = (state = initialState, action) => {
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
  return Number((Math.random()) * 1000000).toFixed(0)
}

export const createNote = (content) => {
  console.log(content)
  return {
    type: "newNote",
    data: {
      content,
      important: false,
      id: generateId(),
    },
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: "toggleImportant",
    data: { id },
  }
}

export default noteReducer
