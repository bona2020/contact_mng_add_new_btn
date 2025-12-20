import '../App.css'

function ContactItem({ contact , onDelete }) {
    return (
        <div className='Card'>
            <p>Name:{contact.Name} </p>
            <p>Number:{contact.Number} </p>
            <button>Edit</button>
            <button onClick = {onDelete}>Delete</button>
        </div>
    )
}
export default ContactItem;