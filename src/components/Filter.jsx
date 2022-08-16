import React from "react"
import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filters = () => {
  const dispatch = useDispatch()

  const filterSelected = (value) => {
    console.log(value)
  }
  return (
    <div>
      All{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => dispatch(filterChange("All"))}
      />
      Important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("important")}
      />
      Not Important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("not important")}
      />
      {/* by giving them all the same name, only one of radio buttons can be selected from the Button Group */}
    </div>
  )
}

export default Filters
