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
    username,
    basket,
    menu,
    isModeAdmin,
    handleDeleteBasketProduct,
    titleEditRef,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDeleteBasketProduct(idProductToDelete, username);
  };

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = basket.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
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
            onDelete={(event) => handleOnDelete(event, menuProduct.id)}
            onClick={() => handleClick(menuProduct.id)}
            isModeAdmin={isModeAdmin}
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
