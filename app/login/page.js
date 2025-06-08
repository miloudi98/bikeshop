"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useUserContext } from "../auth/users.js";
import { useState } from "react";

import NavBar from "../nav.js";


export default function Login() {

  const { user, setUser, userDB } = useUserContext();
  
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const result = userDB.find(user => user.username === formState.username && user.password === formState.password);

    if (result) {
      setUser(result);
      window.location.href = "/bikeshop";
    } else {
      alert("Invalid username or password");
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
      <h2 className="text-center">Hey there!</h2>
      <p className="text-center text-muted">Log in to continue your journey 🚴</p>
      <form className="container border p-4 shadow rounded" onSubmit={onSubmitHandler}>
        <div className="mb-4">
          <label htmlFor="floatingInput">Username</label>
          <input type="text" name="username" className="form-control" value={formState.email} onChange={formStateChangeHandler} id="floatingInput" placeholder="" required />
        </div>

        <div className="mb-4">
          <label htmlFor="floatingPassword">Password</label>
          <input type="password" name="password" className="form-control" value={formState.password} onChange={formStateChangeHandler} id="floatingPassword" placeholder="" required />
        </div>

        <p className="text-muted mb-4">Don't have an account? <a href="/bikeshop/signup" className="text-blue">Sign up</a></p>

        <button type="submit" className="btn btn-dark">Login</button>
      </form>
    </>
  );
};
