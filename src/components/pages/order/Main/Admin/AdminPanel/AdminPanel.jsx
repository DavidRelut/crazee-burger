import styled from "styled-components";
import { theme } from "../../../../../../theme";
export default function AdminPanel() {
  return <AdminPanelStyled>Add</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
