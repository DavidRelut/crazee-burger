import { formatPrice } from "../../../../../../utils/maths";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function BasketTotal() {
  return (
    <BasketTotalStyled>
      <span>Total</span>
      <span>{formatPrice(0)}</span>
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
