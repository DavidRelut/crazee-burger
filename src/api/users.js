import { doc, getDoc, setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    // console.log("userReceived: ", userReceived);
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

export const updateItem = (userId, menu) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: menu,
  };

  console.log(newDoc);

  updateDoc(docRef, newDoc)
    .then((docRef) => {
      console.log("Value of an Existing Document Field has been updated");
    })
    .catch((error) => {
      console.log(error);
    });
};
