import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink } from 'react-router-dom';
import './App.css';
import { AppointmentsPage } from './Containers/AppointmentsPage';
import { ContactsPage } from './Containers/ContactsPage';
import { ErrorPage } from './Containers/ErrorPage'



function App() {
  const [contacts, setContacts] = useState([{name: 'pepe',phone: '123456789', email: 'pepe@gmail.com'}]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  function addContact(name, phone, email) {
    setContacts((contacts) => [
      {
        name: name,
        phone: phone,
        email: email
      },
      ...contacts
    ])
  }

  function addAppointment(title, contact, date, time) {
    setAppointments((appointment) => [
      {
        title: title,
        contact: contact,
        date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
        time: `${time.getHours()}:${time.getMinutes()}`
      },
      ...appointment
    ])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink
            to={ROUTES.CONTACTS}
          >
            Contacts
          </NavLink>
          <NavLink
            to={ROUTES.APPOINTMENTS}>
            Appointments
          </NavLink>
        </nav>
        <main>
          <Routes>
            <Route exact
              path='/'
              element={<Navigate replace to={ROUTES.CONTACTS} />}
            />
            <Route
              path='/appointments'
              element={<AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
                contacts={contacts.map(item => item.name)}
              />}
            />
            <Route
              path='/contacts'
              element={<ContactsPage
                contacts={contacts}
                addContact={addContact}
              />}
            />
            <Route
              path='*'
              element={<ErrorPage />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
