import Header from "../../../../reusable-ui/Header";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
  return (
    <Header>
      <BasketFooterStyled>Codé avec ❤️ et React.JS</BasketFooterStyled>
    </Header>
  );
}

const BasketFooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-weight: ${theme.fonts.weights.bold};
  font-size: ${theme.fonts.size.P2};
`;
