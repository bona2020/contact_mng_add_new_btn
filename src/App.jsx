import './App.css'
import { useState } from 'react'
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';

const ListContact = [
  { Name: 'Ali', Number: 1111 },
  { Name: 'Med', Number: 2222 },
]

function App() {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [contacts, setContact] = useState(ListContact)

  const Handelname = (e) => {
    setName(e.target.value)
  }
  const Handelnumber = (e) => {
    setNumber(e.target.value)
  }
  const Handelcontact = () => {
    setContact([...contacts, { Name: name, Number: number }])
  }

  return (
    <div className='Card'>
      <h1>Contact Manager</h1>
      <ContactInput onChangename={Handelname} onChangenumber={Handelnumber} onClick={Handelcontact} />
      <ContactList items={contacts} />
    </div>
  )
}
export default App;