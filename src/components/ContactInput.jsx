import '../App.css'
function ContactInput({onChangename,onChangenumber,onClick}){
    return(
        <div className = 'Card'>
            <input onChange = {onChangename} placeholder = 'Please Enter Name: ' />
            <input onChange = {onChangenumber} placeholder = 'Please Enter Number: ' />
            <button onClick = {onClick}>Add</button>
        </div>
    )
}
export default ContactInput;