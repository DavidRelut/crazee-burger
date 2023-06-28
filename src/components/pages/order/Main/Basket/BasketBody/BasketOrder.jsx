import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";
import { checkIfProductIsSelected } from "../../MainRightSide/Menu/helper";
import { find } from "../../../../../../utils/arrays";

export default function BasketOrder() {
  const {
    basket,
    menu,
    isModeAdmin,
    handleDeleteBasketProduct,
    productSelected,
    handleProductToEdit,
  } = useContext(OrderContext);

  const handleDelete = (idProductToDelete) => {
    handleDeleteBasketProduct(idProductToDelete);
  };

  return (
    <BasketOrderStyled>
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
            onDelete={() => handleDelete(menuProduct.id)}
            onClick={() => handleProductToEdit(menuProduct.id, basket)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsSelected(
              menuProduct.id,
              productSelected.id
            )}
          />
        );
      })}
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div``;
