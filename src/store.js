import { configureStore } from "@reduxjs/toolkit"
import noteReducer from "./reducers/noteReducers"

export const store = configureStore({
  reducer: {
    noteReducer: noteReducer,
  },
})
