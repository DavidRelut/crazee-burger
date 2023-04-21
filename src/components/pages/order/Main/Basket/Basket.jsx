import { theme } from "../../../../../theme";
import styled from "styled-components";
import BasketHeader from "./Header/BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  color: ${theme.colors.white};
  box-sizing: border-box
  flex: 1;
  display: flex;
  flex-direction: column;
`;
