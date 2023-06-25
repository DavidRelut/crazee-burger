import { theme } from "../../../../../theme";
import styled from "styled-components";
import BasketHeader from "./BasketHeader/BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketProducts from "./BasketBody/BasketProducts";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Loader from "../MainRightSide/Menu/Loader";

export default function Basket() {
  const { menu } = useContext(OrderContext);

  if (menu === undefined) return <Loader />;

  return (
    <BasketStyled>
      <BasketHeader />
      <BasketProducts />
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
