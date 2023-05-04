import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
  return <BasketBodyStyled>Votre commande est vide.</BasketBodyStyled>;
}

const BasketBodyStyled = styled.div`
  flex: 1;
  box-shadow: ${theme.shadows.basket};
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.greyBlue};
`;
