import noteReducer from "./noteReducers"
import deepFreeze from "deep-freeze"
// this will freeze the state so we can test to make sure it is immutable in function

describe("noteReducer", function () {
  test("returns new state with action", () => {
    const state = []
    const action = {
      type: "newNote",
      data: {
        content: "new note",
        important: true,
        id: 1,
      },
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })

  test("toggle importance", () => {
    const state = [
      {
        content: "the app state is in redux store",
        important: true,
        id: 1,
      },
      {
        content: "state changes are made with actions",
        important: false,
        id: 2,
      },
    ]

    const action = {
      type: "toggleImportant",
      data: {
        id: 2,
      },
    }
    deepFreeze(state)
    const newState = noteReducer(state, action)
    console.log(newState)
    expect(newState).toHaveLength(2)
    // expect(newState).toContainEqual(state[1])
    expect(newState).toContainEqual({
      content: "state changes are made with actions",
      important: true,
      id: 2,
    })
  })
})
