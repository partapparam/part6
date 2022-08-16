import React from 'react'
import NewNote from './NewNote'
import Notes from './Notes'

const App = () => {

  const filterSelected = (name) => {
    console.log(name)
  }

  return (
    <div>
      <NewNote />
      <div>
        All <input type="radio" name='filter' onChange={() => filterSelected('All')} />
        Important <input type='radio' name='filter' onChange={() => filterSelected('important')}
        />
        Not Important <input type='radio' name='filter' onChange={() => filterSelected('not important')} />
        {/* by giving them all the same name, only one of radio buttons can be selected from the Button Group */}
      </div>
      <Notes  />
    </div>
  )
}

export default App