import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyBasket() {
  return <EmptyBasketStyled>Votre commande est vide.</EmptyBasketStyled>;
}

const EmptyBasketStyled = styled.div`
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
