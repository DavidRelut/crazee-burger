import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filter, findIndex } from "../utils/arrays";
import { formatPrice, replaceFrenchCommaWithDot } from "../utils/maths";
import { updateItem } from "../api/users";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (productToAdd) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = [productToAdd, ...menuDeepClone];

    setMenu(menuUpdated);
  };

  const handleDelete = (idProductToDelete) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = filter(menuDeepClone, idProductToDelete);

    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    const menuDeepClone = deepClone(menu);

    const productToEdit = findIndex(menu, productBeingEdited.id);

    const editedProduct = {
      ...productBeingEdited,
      price: replaceFrenchCommaWithDot(formatPrice(productBeingEdited.price)),
    };

    menuDeepClone[productToEdit] = editedProduct;

    setMenu(menuDeepClone);
    updateItem("David", menuDeepClone);
  };

  const handleReset = () => {
    setMenu(fakeMenu.LARGE);
  };

  return { menu, handleAdd, handleDelete, handleEdit, handleReset };
};
