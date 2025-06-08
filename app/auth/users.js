"use client";

import { createContext, useContext, useState } from 'react';
import { useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const usr = localStorage.getItem("user");
    const usrDB = localStorage.getItem("userdb");
    const apps = localStorage.getItem("apps");

    if (usr) {
      setUser(JSON.parse(usr));
    }

    if (usrDB) {
      setUserDB(JSON.parse(usrDB));
    }

    if (apps) {
      setAppointments(JSON.parse(apps));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }

    if (userDB) {
      localStorage.setItem("userdb", JSON.stringify(userDB));
    } else {
      localStorage.removeItem("userdb");
    }

    if (appointments) {
      localStorage.setItem("apps", JSON.stringify(appointments));
    } else {
      localStorage.removeItem("apps");
    }
  }, [user, userDB, appointments]);

  return (
    <UserContext.Provider value={{ user, setUser, userDB, setUserDB, appointments, setAppointments }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
