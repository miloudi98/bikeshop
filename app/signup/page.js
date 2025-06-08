"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useUserContext } from "../auth/users.js";
import { useState } from "react";

import NavBar from "../nav.js";

export default function Signup() {
  const { user, setUser, userDB, setUserDB } = useUserContext();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const result = userDB.find(user => user.username === formState.username && user.password === formState.password);

    if (result) {
      alert("username already exists.");
    } else {
      const newUser = {
        username: formState.username, 
        password: formState.password 
      };
      setUserDB([...userDB, structuredClone(newUser)]);
      setUser(structuredClone(newUser));
      window.location.href = "/";
    }
  };
  
  const formStateChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />

      <h2 className="text-center fw-bold mb-3">Join the ride!</h2>
      <p className="text-center text-muted mb-4">Create an account to get started 🚴</p>

      <form className="container border p-4 shadow rounded" onSubmit={onSubmitHandler}>
        <div className="mb-4">
          <label htmlFor="floatingInput">Username</label>
          <input type="text" name="username" className="form-control" value={formState.name} onChange={formStateChangeHandler} id="floatingInput" required />
        </div>

        <div className="mb-4">
          <label htmlFor="floatingPassword">Password</label>
          <input type="password" name="password" className="form-control" value={formState.password} onChange={formStateChangeHandler} id="floatingPassword" required />
        </div>

        <p className="text-muted mb-4">Already have an account? <a href="/login" className="text-blue">Log in</a></p>

        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </>
  );
};

