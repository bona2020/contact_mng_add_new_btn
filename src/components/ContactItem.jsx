import '../App.css'

function ContactItem({ contact }) {
    return (
        <div className='Card'>
            <p>Name:{contact.Name} </p>
            <p>Number:{contact.Number} </p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default ContactItem;