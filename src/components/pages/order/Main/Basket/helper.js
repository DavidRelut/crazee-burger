import { BASKET_MESSAGE } from "../../../../../enums/product";
import { find } from "../../../../../utils/arrays";
import { formatPrice } from "../../../../../utils/maths";
import { convertStringToBoolean } from "../../../../../utils/string";

export const calculateSumToPay = (basket, menu) => {
  return basket.reduce((total, basketProduct) => {
    const menuProduct = find(menu, basketProduct.id);
    if (isNaN(menuProduct.price)) return total;
    if (convertStringToBoolean(menuProduct.isAvailable) === false) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);
};

export const isAvailableBasketPrice = (isAvailable, price) => {
  return convertStringToBoolean(isAvailable)
    ? formatPrice(price)
    : BASKET_MESSAGE.NOT_AVAILABLE;
};
