import { useState } from "react";
import { deepClone, filter, find, findIndex } from "../utils/arrays";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  // ADD PRODUCT TO BASKET
  const handleAddProductToBasket = (productToAdd, username) => {
    const basketDeepClone = deepClone(basket);
    const isProductAlreadyInBasket =
      find(basketDeepClone, productToAdd.id) !== undefined;

    if (!isProductAlreadyInBasket) {
      createNewProductInBasket(productToAdd, basketDeepClone, username);
      return;
    }

    incrementQuantityProductAlreadyInBasket(
      productToAdd,
      basketDeepClone,
      username
    );
  };

  const createNewProductInBasket = (
    productToAdd,
    basketDeepClone,
    username
  ) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketDeepClone];
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  const incrementQuantityProductAlreadyInBasket = (
    productToAdd,
    basketDeepClone,
    username
  ) => {
    const indexOfBasketProductToIncrement = findIndex(
      basketDeepClone,
      productToAdd.id
    );
    basketDeepClone[indexOfBasketProductToIncrement].quantity++;
    setBasket(basketDeepClone);
    setLocalStorage(username, basketDeepClone);
  };
  // ---------------------------------------------------------

  // DELETE PRODUCT FROM BASKET
  const handleDeleteBasketProduct = (idProductToRemove, username) => {
    const basketDeepClone = deepClone(basket);
    const basketUpdated = filter(basketDeepClone, idProductToRemove);
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };

  return {
    basket,
    setBasket,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
  };
};
