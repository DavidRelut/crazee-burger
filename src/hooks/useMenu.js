import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filter, findIndex } from "../utils/arrays";
import { formatPrice, replaceFrenchCommaWithDot } from "../utils/maths";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

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

    console.log("editedProduct", editedProduct);
    console.log("...productBeingEdited", { ...productBeingEdited });

    menuDeepClone[productToEdit] = editedProduct;

    setMenu(menuDeepClone);
  };

  const handleReset = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return { menu, handleAdd, handleDelete, handleEdit, handleReset };
};
