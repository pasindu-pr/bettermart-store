import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, googleAuthProvider } from "../libs/firebase";

export const AuthService = {
  loginWithGoogle: async () => {
    return await signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  },

  registerWithEmail: async (name: string, email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser!, {
          displayName: name,
        }).then((res) => res);
      })
      .catch((error) => {
        throw error;
      });
  },

  loginWithEmail: async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((res) => res)
      .catch((error) => {
        throw error;
      });
  },

  signOut: async () => {
    signOut(auth)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
};
