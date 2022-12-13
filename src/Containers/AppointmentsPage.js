// import React from "react";

import { useState } from "react";
import { AppointmentForm } from "../Components/AppointmentForm";
import { TileList } from "../Components/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const handleSubmit = () => {
    props.addAppointment(title, name, date, time);
    setTitle('');
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Agregar Turno</h2>
        <AppointmentForm
        title={title}
        setTitle={setTitle}
        name={name}
        setName={setName}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        handleSubmit={handleSubmit}
        contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Turnos</h2>
        <TileList deleteObj={props.deleteObj} list={props.appointments}></TileList>
      </section>
    </div>
  );
};
