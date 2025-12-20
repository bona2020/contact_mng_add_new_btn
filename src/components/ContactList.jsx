import '../App.css'

import ContactItem from "./ContactItem";


function ContactList({ items , onDelete }) {
    return (
        <div className='Card'>
            <p style={{ textAlign: 'center' }}>Your Contact List</p>
            {items.map((item, index) => (<ContactItem key={index} contact={item} onDelete = {()=> onDelete(index)} />))}
        </div>
    )
}
export default ContactList;