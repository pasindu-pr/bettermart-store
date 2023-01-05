import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../libs/firebase";

export const AuthContext = createContext<{ user: User | undefined }>({
  user: undefined,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
