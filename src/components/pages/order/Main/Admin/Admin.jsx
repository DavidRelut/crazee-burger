import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTabs from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function Admin({ className }) {
  return (
    <AdminStyled className={className}>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div``;
