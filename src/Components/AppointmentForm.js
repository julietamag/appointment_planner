import DatePicker from "react-datepicker";
import { ContactPicker } from "./contactPicker";
import { subDays, setHours, setMinutes } from 'date-fns'

import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = (props) => {

  function handleTitleChange(e) {
    props.setTitle(e.target.value)
  }

  function handleContactChange(contact) {
    props.setName(contact)
  }

  function handleDateChange(e) {
    props.setDate(e)
  }

  function handleTimeChange(e) {
    props.setTime(e)
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    props.handleSubmit();
  }

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title">Tipo de Turno:
          <input type="text" id="title" name="title" placeholder="Seleccione el tipo de turno" onChange={handleTitleChange} value={props.title} required />
        </label>
        <label htmlFor="contact">Contacto:
          <ContactPicker contacts={props.contacts} name={props.name} handleContactChange={handleContactChange} setName={props.setName} />
        </label>
        <label htmlFor="date">Fecha:
          <DatePicker
            selected={props.date}
            onChange={handleDateChange}
            filterDate={isWeekday}
            minDate={subDays(new Date(), 1)}
            placeholderText="Seleccione una fecha"
          />
        </label>
        <label >Hora:
          <DatePicker
            selected={props.time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            minTime={setHours(setMinutes(new Date(), 0), 8)}
            maxTime={setHours(setMinutes(new Date(), 0), 19)}
            placeholderText="Seleccione una hora"
          />
        </label>
        <input type="submit" value='Enviar' />
      </form>
    </div>
  );
};