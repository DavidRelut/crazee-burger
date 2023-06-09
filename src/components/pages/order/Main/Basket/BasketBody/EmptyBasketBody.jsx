import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyBasketBody() {
  return (
    <EmptyBasketBodyStyled>Votre commande est vide.</EmptyBasketBodyStyled>
  );
}

const EmptyBasketBodyStyled = styled.div`
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
