import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";
import { checkIfProductIsSelected } from "../../MainRightSide/Menu/helper";
import { find } from "../../../../../../utils/arrays";

export default function BasketProducts() {
  const {
    basket,
    menu,
    username,
    isModeAdmin,
    handleDeleteBasketProduct,
    productSelected,
    handleProductToEdit,
  } = useContext(OrderContext);

  const handleOnDelete = (idProductToDelete, username) => {
    handleDeleteBasketProduct(idProductToDelete, username);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = find(menu, basketProduct.id);
        return (
          <BasketCard
            key={menuProduct.id}
            title={menuProduct.title}
            imageSource={
              menuProduct.imageSource
                ? menuProduct.imageSource
                : IMAGE_COMING_SOON
            }
            price={formatPrice(menuProduct.price)}
            quantity={basketProduct.quantity}
            onDelete={() => handleOnDelete(menuProduct.id, username)}
            onClick={() => handleProductToEdit(menuProduct.id, basket)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsSelected(
              menuProduct.id,
              productSelected.id
            )}
          />
        );
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div``;
