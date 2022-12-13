import React, { useEffect, useState } from "react";
import { ContactForm } from "../Components/ContactForm";

import { TileList } from "../Components/TileList";

export const ContactsPage = (props) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false)

  const handleSubmit = () => {
   if(!isDuplicate){
    props.addContact(name, phone, email)
    setName('')
    setEmail('')
    setPhone('')
   }
  };

  // check if the name is duplicate
  useEffect(() => {
    if(props.contacts.some(item => item.name.toLowerCase() === name.toLocaleLowerCase())){
      setIsDuplicate(true)
    }else{
      setIsDuplicate(false)
    }
  }, [name, props.contacts])

  return (
    <div>
      <section>
        <h2>Agregar Contacto</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        contacts={props.contacts}
        isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contactos</h2>
        <TileList
          list={props.contacts}
        />
      </section>
    </div>
  );
};
