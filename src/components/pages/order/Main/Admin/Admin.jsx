import styled from "styled-components";
import AdminTabs from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;
