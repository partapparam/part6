import React, { useEffect } from "react"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import Filters from "./components/Filter"
import noteService from "./services/notes"
import { setNotes } from "./reducers/noteReducers"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    noteService.getAll().then((notes) => [dispatch(setNotes(notes))])
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <Filters />
      <Notes />
    </div>
  )
}

export default App
