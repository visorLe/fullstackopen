import { useState } from 'react'
import NumbersList from './components/NumbersList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={e => setNewName(e.target.value)} />
        <button type="submit">add</button>
      </form>

      <h2>Numbers</h2>
      <NumbersList persons={persons} />
    </div>
  )
}

export default App
