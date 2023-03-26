import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
