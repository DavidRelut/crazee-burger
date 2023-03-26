import styled from "styled-components";
import { theme } from "../../../../../../theme";
export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="admin-container"></div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  .admin-container {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px -2px 8px -2px;
    height: 13em;
    padding: 25px 30px 20px 60px;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgb(228, 229, 233);
    border-bottom-right-radius: 15px;
  }
`;
