import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log("userReceived: ", userReceived);
  }
};

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };

  setDoc(docRef, newDoc);
};

export const update = (userId) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: fakeMenu.LARGE,
  };

  setDoc(docRef, newDoc);
};
