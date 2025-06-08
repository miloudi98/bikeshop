"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useUserContext } from "../auth/users.js";
import { useState } from "react";

import NavBar from "../nav.js";

const BrokenBikeForm = () => {
  const { appointments, setAppointments } = useUserContext();

  const [formState, setFormState] = useState({
    email: "",
    phone_number: "",
    damage_description: "",
    bike_images: [],
    appointment_date: "",
  });

  const [success, setSuccess] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { email: formState.email, date: formState.appointment_date, reason: "Bike repair" }]);
    setSuccess(true);
  };

  const formStateChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "bike_images") {

      Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
          const data = event.target.result;
          setFormState(prev => ({
            ...prev,
            bike_images: [...prev.bike_images, data],
          }));
        };

        reader.readAsDataURL(file);
      });

    } else {
      setFormState(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };


  if (success) {
    return (
     <div className="container mt-5">
        <div className="card text-white bg-success shadow rounded-3">
          <div className="card-body">
            <h4 className="card-title">Appointment Booked!</h4>
            <p className="card-text">
              Your appointment has been successfully scheduled.
            </p>
            <hr className="bg-white" />
            <p className="mb-0 fw-bold">Date:</p>
            <p>{formState.appointment_date}</p>
          </div>
        </div>

        <a href="/bikeshop/appointments" className="btn btn-secondary mt-4">My appointments</a>
      </div> 
    );
  }

  return (
    <form className="mt-4 container border p-4 shadow rounded" onSubmit={onSubmitHandler}>

      <h4 className="mb-3">Need a Fix? Let’s Get Your Bike Rolling Again</h4>
      <p className="text-muted">Fill out the form below to schedule a repair. Our expert mechanics will take care of the rest.</p>

      <div className="mb-4">
        <label htmlFor="floatingInput">Email address</label>
        <input type="email" name="email" className="form-control" value={formState.email} onChange={formStateChangeHandler} id="floatingInput" placeholder="name@example.com" required />
      </div>

      <div className="mb-4">
        <label htmlFor="floatingPhoneNumber">Phone number</label>
        <input type="tel" name="phone_number" className="form-control" value={formState.phone_number} onChange={formStateChangeHandler} id="floatingPhoneNumber" placeholder="(123)-456-7890" required />
      </div>

      <div className="mb-4">
        <label htmlFor="DamageDescription" className="form-label">Damage description</label>
        <textarea className="form-control" name="damage_description" value={formState.damage_description} onChange={formStateChangeHandler} id="DamageDescription" rows="5" placeholder="Provide as much information as you can."
         required>
        </textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="BikeImage" className="form-label">Images of your bike</label>
        <input type="file" name="bike_images" className="form-control" onChange={formStateChangeHandler} id="BikeImage" multiple/>
      </div>

      <div className="mb-4">
        <label htmlFor="AppointmentDate" className="form-label">Select the appointment date</label>
        <input type="date" name="appointment_date" className="form-control" value={formState.appointment_date} onChange={formStateChangeHandler} id="AppointmentDate" required/>
      </div>

      <button type="submit" className="btn btn-dark">Submit request</button>
    </form>
  );
};

export default function Repair() {
  return (
    <>
      <NavBar />
      <BrokenBikeForm />
    </>
  );
}
