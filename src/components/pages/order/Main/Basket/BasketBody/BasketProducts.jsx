import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyBasketBody from "./EmptyBasketBody";
import BasketOrder from "./BasketOrder";

export default function BasketProducts() {
  const { basketOrder } = useContext(OrderContext);

  return (
    <BasketProductsStyled>
      {basketOrder === [] ? <EmptyBasketBody /> : <BasketOrder />}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex-direction: column;
  height: calc(((85vh - 70px) - 50px) - 20px);
  box-shadow: ${theme.shadows.basket};
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  position: relative;
`;
