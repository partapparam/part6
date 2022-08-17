import { createSlice } from "@reduxjs/toolkit"
import noteService from "../services/notes"

const generateId = () => {
  return Number(Math.random() * 1000000).toFixed(0)
}

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
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

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions

export const initializeNotes = () => {
  return async (dispatch, getState) => {
    const notes = await noteService.getAll()
    dispatch(appendNote(notes))
  }
}

export const createNote = (content) => {
  return async (dispatch, getState) => {
    const newNote = await noteService.createNew(content)
    dispatch(appendNote(newNote))
  }
}

export default noteSlice.reducer
