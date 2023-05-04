import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/arrays";

export const useMenuCrud = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (productToAdd) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = [productToAdd, ...menuDeepClone];

    setMenu(menuUpdated);
  };

  const handleDelete = (idProductToDelete) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = menuDeepClone.filter(
      (product) => product.id !== idProductToDelete
    );

    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    const menuDeepClone = deepClone(menu);

    const productToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuDeepClone[productToEdit] = productBeingEdited;

    setMenu(menuDeepClone);
  };

  const handleReset = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, handleAdd, handleDelete, handleEdit, handleReset };
};
