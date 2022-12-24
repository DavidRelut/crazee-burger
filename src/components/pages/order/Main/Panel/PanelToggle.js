import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function PanelToggle() {
  return (
    <PanelToggleStyled>
      <div className="tab collapse-tab">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon-collapse"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div className="tab form-tab active">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          className="icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"></path>
        </svg>
        <span>Ajouter un produit</span>
      </div>
      <div className="tab form-tab">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
        </svg>
        <span>Modifier un produit</span>
      </div>
    </PanelToggleStyled>
  );
}

const PanelToggleStyled = styled.div`
  position: absolute;
  top: -37px;
  left: 8%;
  transform: translateX(-8%);
  border: 1px solid transparent;
  display: flex;
  align-items: center;

  .collapse-tab {
    background-color: rgb(255, 255, 255);
    color: rgb(147, 162, 177);
    border-top: 1px solid rgb(228, 229, 233);
    border-right: 1px solid rgb(228, 229, 233);
    border-left: 1px solid rgb(228, 229, 233);
    border-image: initial;
    border-bottom: none;
    box-shadow: rgb(0 0 0 / 10%) 0px -2px 8px -2px;

    .icon-collapse {
      min-width: 1.5em;
      min-height: 1.5em;
    }
  }

  .form-tab {
    box-shadow: rgb(0 0 0 / 10%) 0px -2px 8px -2px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(228, 229, 233);
    color: rgb(147, 162, 177);
    margin-left: 1px;
  }

  .form-tab.active {
    background: rgb(41, 39, 41);
    border: 1px solid rgb(41, 39, 41);
    color: rgb(255, 255, 255);
    font-weight: 700;
  }

  .tab {
    /* border-top: 1px solid rgb(51, 51, 51); */
    /* border-right: 1px solid rgb(51, 51, 51); */
    /* border-left: 1px solid rgb(51, 51, 51); */
    border-image: initial;
    background-color: rgb(245, 245, 247);
    /* color: rgb(23, 22, 26); */
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 35px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: rgb(245, 245, 247);
    padding: 0px 16px;
    cursor: pointer;
    font-size: 15px;
  }

  .icon {
    min-width: 1em;
    min-height: 1em;
    margin-right: 0.5em;
  }

  span {
    font-weight: 500;
  }
`;
