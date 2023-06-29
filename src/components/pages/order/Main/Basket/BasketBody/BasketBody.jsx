import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import { isEmpty } from "../../../../../../utils/arrays";

export default function BasketBody() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketBodyStyled basketLength={basket ? basket.length : 0}>
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex-direction: column;
  height: calc(((85vh - 70px) - 50px) - 20px);
  box-shadow: ${theme.shadows.basket};
  justify-content: center;
  align-items: center;
  position: relative;

  overflow-y: ${({ basketLength }) => (basketLength >= 7 ? "scroll" : "none")};
`;
