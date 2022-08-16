import { createSlice } from "@reduxjs/toolkit"

const generateId = () => {
  return Number(Math.random() * 1000000).toFixed(0)
}

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const noteToChange = action.payload
      return state.map((note) =>
        note.id !== noteToChange.id ? note : noteToChange
      )
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    },
  },
})

export const { createNote, toggleImportanceOf, appendNote, setNotes } =
  noteSlice.actions
export default noteSlice.reducer
