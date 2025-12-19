import '../App.css'

import ContactItem from "./ContactItem";


function ContactList({ items }) {
    return (
        <div className='Card'>
            <p style={{ textAlign: 'center' }}>Your Contact List</p>
            {items.map((item, index) => (<ContactItem key={index} contact={item} />))}
        </div>
    )
}
export default ContactList;