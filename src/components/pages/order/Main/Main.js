import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import PanelContainer from "./Panel/PanelContainer";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div menu-and-panel-container>
        <Menu />
        <PanelContainer className="panel-container" />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  position: relative;
  background-color: ${theme.colors.background_white};
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 25% 1fr;

  overflow-y: scroll;

  .menu-and-panel-container {
    position: absolute;
    height: calc(85vh);
    display: flex;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 0px inset;
    border-bottom-right-radius: 15px;
  }

  .panel-container {
    position: relative;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 2;
  }

  /* .basket {
    background: ${theme.colors.incognito};
  } */
`;
