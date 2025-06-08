"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useUserContext } from "../auth/users.js";
import { useState } from "react";

import NavBar from "../nav.js";

export default function Appointments() {
  const { appointments } = useUserContext();
  const [email, setEmail] = useState("");
  const [appsShown, setAppsShown] = useState([]);
  const [showApps, setShowApps] = useState(false);

  const onSubmitHandler = (e) => {
    console.log(appointments);
    e.preventDefault();
    setAppsShown(appointments.filter((a) => a.email === email));
    setShowApps(true);
  };

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
    setShowApps(false);
  };

  return (
    <>
      <NavBar />
      <form className="container p-4 rounded" onSubmit={onSubmitHandler}>
        <div className="mb-4">
          <label htmlFor="floatingInput">Enter your email address</label>
          <input type="email" name="email" className="form-control" value={email} onChange={onChangeHandler} id="floatingInput" placeholder="name@example.com" required />
        </div>
        <button type="submit" className="btn btn-dark">Search</button>
      </form>

      {
        showApps && (
        <div className="container mt-4">
          <h4 className="mb-3">Your Appointments</h4>
          {appsShown.length === 0 ? (
            <div className="alert alert-info">No appointments found.</div>
          ) : (
            <div className="row row-cols-1 g-3">
              {appsShown.map((appointment, index) => (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{appointment.title || 'Appointment'}</h5>
                      <p className="card-text mb-1"><strong>Date:</strong> {appointment.date}</p>
                      <p className="card-text mb-0"><strong>Purpose:</strong> {appointment.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        )
      }
    </>
  );
}
