import styled from "styled-components";
import { theme } from "../../../../../../theme";
import {
  tabsConfig,
  getTabSelected,
} from "../../../../../../utils/admin/tabsConfig";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
export default function AdminPanel() {
  const { currentTabSelected } = useContext(OrderContext);

  const tabs = tabsConfig;
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return <AdminPanelStyled>{tabSelected.Panel}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 240px;
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  padding-left: 3px;
`;
