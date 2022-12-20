import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageSyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageSyled>
  );
}

const OrderPageSyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
    margin: ${theme.spacing.md};
  }
`;
