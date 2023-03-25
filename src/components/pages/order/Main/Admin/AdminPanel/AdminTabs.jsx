import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BsPlusLg } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { CgChevronDown } from "react-icons/cg";
import Tab from "../../../../../reusable-ui/Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab
        className="tab collapse-tab "
        Icon={<CgChevronDown className="icon-collapse" />}
      />
      <Tab
        className="tab form-tab active"
        Icon={<BsPlusLg className="icon" />}
        label="Ajouter un produit"
      />
      <Tab
        className="tab form-tab"
        Icon={<FaPen className="icon" />}
        label="Modifier un produit"
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
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
  /* 
  .collapse-tab.active {
    background: rgb(41, 39, 41);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(41, 39, 41);
  } */

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
    font-weight: 500;
  }

  .tab {
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
`;
