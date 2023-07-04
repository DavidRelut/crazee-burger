import { formatPrice } from "../../../../../../utils/maths";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { calculateSumToPay } from "../helper";
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect";

export default function BasketTotal() {
  const { basket, menu } = useContext(OrderContext);

  const sumToPay = calculateSumToPay(basket, menu);

  return (
    <BasketTotalStyled>
      <span>Total</span>
      <CasinoEffect className="totalPrice" count={formatPrice(sumToPay)} />
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

  .totalPrice {
    font-weight: ${theme.fonts.weights.bold};
  }
`;
