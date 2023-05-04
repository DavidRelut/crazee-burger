import Header from "../../../../../reusable-ui/Header";
import styled from "styled-components";
import BasketTotal from "./BasketTotal";

export default function BasketHeader() {
  return (
    <Header>
      <BasketHeaderStyled>
        <BasketTotal />
      </BasketHeaderStyled>
    </Header>
  );
}
const BasketHeaderStyled = styled.div`
  width: 100%;
`;
