import '../App.css'
import { useState } from 'react'

function ContactItem({ contact , onDelete , onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(contact.name)
  const [editedNumber, setEditedNumber] = useState(contact.number)

  const saveEdit = () => {
    onUpdate({ name: editedName, number: editedNumber })
    setIsEditing(false)
  }

    return (
        <div className='Card'>
            {isEditing ? (
        <>
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            value={editedNumber}
            onChange={(e) => setEditedNumber(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.number}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
        </div>
    )
}
export default ContactItem;