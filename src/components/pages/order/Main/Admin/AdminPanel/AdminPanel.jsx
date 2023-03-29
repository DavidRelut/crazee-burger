import styled from "styled-components";
import { theme } from "../../../../../../theme";
import {
  tabsConfig,
  getTabSelected,
} from "../../../../../../utils/admin/tabsConfig";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AdminContent from "./AdminContent";
export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>{tabSelected.label && <AdminContent />}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  box-sizing: border-box;
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
