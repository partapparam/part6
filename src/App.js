import logo from "./logo.svg"
import "./App.css"
import React from "react"
import Note from "./Note"

function App({ store }) {
  // store.subscribe(() => {
  //   const stateNow = store.getState()
  //   console.log("this is the state now", stateNow)
  // })

  // console.log(store.getState())
  // store.dispatch({ type: "increment" })
  // store.dispatch({ type: "increment" })
  // store.dispatch({ type: "increment" })

  // console.log(store.getState())
  return (
    <div className="App">
      <Note store={store} />
    </div>
  )
}

export default App
