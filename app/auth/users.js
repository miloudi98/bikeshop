"use client";

import { createContext, useContext, useState } from 'react';
import { useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userDB, setUserDB] = useState([]);

  useEffect(() => {
    const usr = localStorage.getItem("user");
    const usrDB = localStorage.getItem("userdb");

    if (usr) {
      setUser(JSON.parse(usr));
    }

    if (usrDB) {
      setUserDB(JSON.parse(usrDB));
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
  }, [user, userDB]);

  return (
    <UserContext.Provider value={{ user, setUser, userDB, setUserDB }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
