import { getAuth, User, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../libs/firebase";

export const AuthContext = createContext<{
  user: User | undefined;
  admin: boolean;
}>({
  user: undefined,
  admin: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [admin, setAdmin] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user?.getIdTokenResult().then((res) => {
        if (res.claims.admin) {
          setAdmin(true);
        }
      });

      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, admin }}>
      {children}
    </AuthContext.Provider>
  );
};
