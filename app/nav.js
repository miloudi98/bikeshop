"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useUserContext } from "./auth/users.js";

const UserInfo = () => {
  const { user, setUser } = useUserContext();

  const logout = () => setUser(null);

  if (user === null) {
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/login">Log in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign up</a>
        </li>
      </ul>
    );
  }

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <span className="avatar nav-link"><i className="bi bi-person"> {user.username} </i></span>
      </li>
      <li className="nav-item">
        <a href="/appointments" className="nav-link">
          Appointments
        </a>
      </li>
      <li className="nav-item">
        <button onClick={logout} className="nav-link"> <span className="text-danger">Sign out</span> </button>
      </li>
    </ul>
  );
};

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="/">
          <img className="avatar" src="/favicon.ico" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/browse">Browse bikes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/repair">Repair your bike</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/appointments">My appointments</a>
            </li>
          </ul>
        </div>

        <UserInfo />
      </div>
    </nav>
  );
}
