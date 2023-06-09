import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyBasketBody from "./EmptyBasketBody";
import BasketOrder from "./BasketOrder";

export default function BasketProducts() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketProductsStyled basketLength={basket ? basket.length : 0}>
      {basket.length === 0 ? <EmptyBasketBody /> : <BasketOrder />}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex-direction: column;
  height: calc(((85vh - 70px) - 50px) - 20px);
  box-shadow: ${theme.shadows.basket};
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ basketLength }) =>
    basketLength >= 7 &&
    css`
      overflow-y: scroll;
    `}
`;
