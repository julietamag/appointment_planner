export const ContactForm = (props) => {
    function handleNameChange(e){
        props.setName(e.target.value)
       }
      
       function handleEmailChange(e){
        props.setEmail(e.target.value)
       }
      
       function handlePhoneChange(e){
        props.setPhone(e.target.value)
       }

       function handleSubmitForm(e){
        e.preventDefault();
        props.handleSubmit();
       }
       
    return (
        <form id="contact_form" onSubmit={handleSubmitForm}>
        <label htmlFor="fname">Nombre Completo:
        <input type="text" id="fname" name="fname" onChange={handleNameChange} value={props.name} required />
        </label>
        <label htmlFor="email">Email:
        <input type="email" id="email_contact" name="email" onChange={handleEmailChange} value={props.email} required />
        </label>
        <label htmlFor="phone">Telefono:
        <input type="phone" id="phone_contact" name="phone" onChange={handlePhoneChange} value={props.phone} />
        </label>
        <input type="submit"  disabled={props.isDuplicate} 
          value={props.isDuplicate ? 'Please enter another name' : 'Submit'}  />
      </form>
    );
  };