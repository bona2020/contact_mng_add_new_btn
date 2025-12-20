import './App.css'
import { useState } from 'react'
import ContactInput from './components/ContactInput';
import ContactList from './components/ContactList';

const ListContact = [
  { name: 'Ali', number: 1111 },
  { name: 'Med', number: 2222 },
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
    setContact([...contacts, { name: name, number: number }])
  }
  const Handeldelete = (index)=>{
    setContact(contacts.filter((_,i) => i !==index))
  }
  const updateContact = (index, updated) => {
    const newContacts = [...contacts]
    newContacts[index] = updated
    setContact(newContacts)
  }
  return (
    <div >
      <h1>Contact Manager</h1>
      <ContactInput onChangename={Handelname} onChangenumber={Handelnumber} onClick={Handelcontact} />
      <ContactList items={contacts} onUpdate={updateContact} onDelete = {Handeldelete} />
    </div>
  )
}
export default App;