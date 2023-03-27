import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BsPlusLg } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Tab from "../../../../../reusable-ui/Tab";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed } = useContext(OrderContext);

  return (
    <AdminTabsStyled>
      <Tab
        Icon={
          isCollapsed ? (
            <FiChevronUp className="icon-chevron" />
          ) : (
            <FiChevronDown className="icon-chevron" />
          )
        }
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      <Tab
        className="is-active"
        Icon={<BsPlusLg />}
        label="Ajouter un produit"
      />
      <Tab Icon={<FaPen />} label="Modifier un produit" />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  .icon-chevron {
    min-width: 1.5em;
    min-height: 1.5em;
  }

  button {
    margin-left: 1px;
  }
`;
