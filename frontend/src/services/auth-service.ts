import { signInWithPopup } from "firebase/auth";
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
};
