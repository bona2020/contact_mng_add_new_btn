import '../App.css'

import ContactItem from "./ContactItem";


function ContactList({ items , onDelete , onUpdate}) {
    return (
        <div className='Card'>
            <p style={{ textAlign: 'center' }}>Your Contact List</p>
            {items.map((item, index) => (<ContactItem key={index} contact={item} 
            onUpdate={(updated) => onUpdate(index, updated)}
            onDelete = {()=> onDelete(index)} />))}
        </div>
    )
}
export default ContactList;