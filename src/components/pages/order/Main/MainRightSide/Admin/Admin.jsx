import styled from "styled-components";
import AdminTabs from "./AdminPanel/AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import { fadeInFromBottom } from "../../../../../../theme/animations";
import { theme } from "../../../../../../theme";

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

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.slow};
`;
