import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
  height: calc(95vh - 10vh);

  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 25% 1fr;

  .basket {
    background: ${theme.colors.background_dark};
    border: 1px solid ${theme.colors.dark};
    color: ${theme.colors.white};
  }

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow: hidden;
  }
`;
