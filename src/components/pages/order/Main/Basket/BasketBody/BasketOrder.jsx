import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";
import { checkIfProductIsSelected } from "../../MainRightSide/Menu/helper";

export default function BasketOrder() {
  const {
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    titleEditRef,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (idProductToDelete) => {
    handleDeleteBasketProduct(idProductToDelete);
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
      {basket.map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            price={formatPrice(price)}
            quantity={quantity}
            onDelete={(event) => handleOnDelete(id)}
            onClick={() => handleClick(id)}
            isModeAdmin={isModeAdmin}
            isSelected={checkIfProductIsSelected(id, productSelected.id)}
          />
        );
      })}
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div``;
