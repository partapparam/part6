import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./reducers/filterReducer"
import noteReducer from "./reducers/noteReducers"

// const preloadedState = {
//   note : [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]
// }
const reducer = {
  notes: noteReducer,
  filter: filterReducer,
}

export const store = configureStore({
  reducer,
})
