import React, { useEffect } from "react"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import Filters from "./components/Filter"
import { initializeNotes } from "./reducers/noteReducers"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeNotes())
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
