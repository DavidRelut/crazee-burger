import { db } from "./firebase-config";
import { doc, setDoc } from "firebase/firestore";

export const syncBothMenus = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);

  const newDoc = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, newDoc);
};
