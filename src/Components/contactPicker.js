export const ContactPicker = (props) => {
function handlePickContact(e){
    props.handleContactChange(e.target.value)
}
    
    return (
    <select 
    name="contact"
    onChange={handlePickContact}
    defaultValue=''
    placeholder="Por favor seleccione una opcion"
    >
        {props.contacts.map(item => <option onChange={props.handleContactChange} value={item} key={item}>{item}</option>)}
    </select>
)
}