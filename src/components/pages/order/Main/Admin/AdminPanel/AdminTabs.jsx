import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { BsPlusLg } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { CgChevronDown } from "react-icons/cg";
import Tab from "../../../../../reusable-ui/Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<CgChevronDown className="icon" />} />
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

  .icon {
    min-width: 1.5em;
    min-height: 1.5em;
  }

  button {
    margin-left: 1px;
  }
`;
