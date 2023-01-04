import { signInWithPopup, signOut } from "firebase/auth";
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
