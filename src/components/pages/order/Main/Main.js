import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .basket {
    background: ${theme.colors.incognito};
  }
  .menu {
    background: ${theme.colors.green};
  }
`;