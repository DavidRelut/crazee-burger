import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyBasketBody from "./EmptyBasketBody";
import BasketOrder from "./BasketOrder";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";

export default function BasketBody() {
  const { basketOrder } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {basketOrder === [] ? <EmptyBasketBody /> : <BasketOrder />}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex-direction: column;
  height: calc(((85vh - 70px) - 50px) - 20px);
  box-shadow: ${theme.shadows.basket};
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  position: relative;
`;
