import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menu];
    const menuUpdate = [productToAdd, ...menuCopy];
    setMenu(menuUpdate);
  };

  const handleDelete = (idProductToDelete) => {
    const menuCopy = [...menu];
    const menuUpdate = menuCopy.filter(
      (product) => product.id !== idProductToDelete
    );
    setMenu(menuUpdate);
  };

  const handleReset = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    menu,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    handleAdd,
    handleDelete,
    handleReset,
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
    overflow: hidden;
  }
`;
