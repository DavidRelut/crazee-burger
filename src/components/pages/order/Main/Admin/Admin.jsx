import styled from "styled-components";
import { theme } from "../../../../../theme";
import AdminTab from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function Admin({ className }) {
  return (
    <AdminStyled className={className}>
      <AdminTab />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div``;
