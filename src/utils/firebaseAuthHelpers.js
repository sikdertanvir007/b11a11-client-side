import { getAuth, onAuthStateChanged } from "firebase/auth";

export function waitForAuth() {
  return new Promise((resolve) => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}
