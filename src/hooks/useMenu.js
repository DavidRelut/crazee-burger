import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filter, findIndex } from "../utils/arrays";
import { formatPrice, replaceFrenchCommaWithDot } from "../utils/maths";
import { syncBothMenus } from "../api/product";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const handleAdd = (productToAdd, username) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = [productToAdd, ...menuDeepClone];

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (idProductToDelete, username) => {
    const menuDeepClone = deepClone(menu);

    const menuUpdated = filter(menuDeepClone, idProductToDelete);

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
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
  };

  const handleReset = () => {
    setMenu(fakeMenu.LARGE);
  };

  return { menu, handleAdd, handleDelete, handleEdit, handleReset };
};
