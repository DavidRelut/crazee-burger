import { useState } from "react";
import { deepClone, filter, find, findIndex } from "../utils/arrays";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  // ADD PRODUCT TO BASKET
  const handleAddProductToBasket = (productToAdd) => {
    const basketDeepClone = deepClone(basket);
    const isProductAlreadyInBasket =
      find(basketDeepClone, productToAdd.id) !== undefined;

    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketDeepClone);
      return;
    }

    incrementQuantityProductAlreadyInBasket(productToAdd, basketDeepClone);
  };

  const createNewProductInBasket = (productToAdd, basketDeepClone) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketDeepClone];
    setBasket(basketUpdated);
  };

  const incrementQuantityProductAlreadyInBasket = (
    productToAdd,
    basketDeepClone
  ) => {
    const indexOfBasketProductToIncrement = findIndex(
      basketDeepClone,
      productToAdd.id
    );
    basketDeepClone[indexOfBasketProductToIncrement].quantity++;
    setBasket(basketDeepClone);
  };
  // ---------------------------------------------------------

  // DELETE PRODUCT FROM BASKET
  const handleDeleteBasketProduct = (idProductToRemove) => {
    const basketDeepClone = deepClone(basket);
    const basketUpdated = filter(basketDeepClone, idProductToRemove);
    setBasket(basketUpdated);
  };
  // ---------------------------------------------------------

  const handleEditBasket = (productBeingEdited) => {
    const basketDeepClone = deepClone(basket);

    const productToEdit = findIndex(basket, productBeingEdited.id);

    basketDeepClone[productToEdit] = productBeingEdited;

    setBasket(basketDeepClone);
  };

  return {
    basket,
    setBasket,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
    handleEditBasket,
  };
};
