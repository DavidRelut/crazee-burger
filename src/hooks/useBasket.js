import { useState, useEffect } from "react";
import { deepClone, filter, find, findIndex } from "../utils/arrays";

export const useBasket = () => {
  const [basket, setBasket] = useState(() => {
    // Récupère le panier depuis localStorage lorsque le composant est monté
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  // Sauvegarde le panier dans localStorage chaque fois qu'il est modifié
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

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

  return {
    basket,
    setBasket,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
  };
};
