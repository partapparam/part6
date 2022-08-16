import React from "react"
import NewNote from "./NewNote"
import Notes from "./Notes"
import Filters from "./components/Filter"

const App = () => {
  return (
    <div>
      <NewNote />
      <Filters />
      <Notes />
    </div>
  )
}

export default App
