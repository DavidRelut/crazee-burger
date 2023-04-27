import { formatPrice } from "../../../../../../utils/maths";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";

export default function BasketTotal() {
  const { basket } = useContext(OrderContext);

  const basketTotal = basket.reduce((total, product) => {
    total += product.price * product.quantity;
    return total;
  }, 0);

  return (
    <BasketTotalStyled>
      <span>Total</span>
      <span>{formatPrice(basketTotal)}</span>
    </BasketTotalStyled>
  );
}

const BasketTotalStyled = styled.div`
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  letter-spacing: 2px;
  color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
