import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";

export default function OrderPage() {
  const { isModeAdmin, setIsModeAdmin } = useState(false);

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageSyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageSyled>
    </OrderContext.Provider>
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
  }
`;
