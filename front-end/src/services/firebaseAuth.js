import { auth } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";

export const signIn = async (email, password) => {
  console.log("inside auth Sigin");
  try {
    if (!email || !password) {
      return { error: "Email and password are required" };
    }
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    const idToken = await user.user.getIdToken();
    console.log(idToken);
    localStorage.setItem("idToken", idToken);
    return user.user;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const signUp = async (email, password) => {
  try {
    if (!email || !password) {
      return { error: "Email and password are required" };
    }
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    const idToken = await user.user.getIdToken();
    console.log(idToken);
    localStorage.setItem("idToken", idToken);
    console.log("Succesfully registerd");
    return true;
    return user.user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
