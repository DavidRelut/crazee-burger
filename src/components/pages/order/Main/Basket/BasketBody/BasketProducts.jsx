import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyBasketBody from "./EmptyBasketBody";
import BasketOrder from "./BasketOrder";
import { isEmpty } from "../../../../../../utils/arrays";

export default function BasketProducts() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketProductsStyled basketLength={basket ? basket.length : 0}>
      {isEmpty(basket) ? <EmptyBasketBody /> : <BasketOrder />}
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

  overflow-y: ${({ basketLength }) => (basketLength >= 7 ? "scroll" : "none")};
`;
