import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";
// import { useRef } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  // const [isClick, setIsClick] = useState(false);
  // const inputRef = useRef();

  const handleAdd = (productToAdd) => {
    const menuDeepCopy = JSON.parse(JSON.stringify(menu));
    const menuUpdated = [productToAdd, ...menuDeepCopy];
    setMenu(menuUpdated);
  };

  const handleDelete = (idProductToDelete) => {
    const menuDeepCopy = JSON.parse(JSON.stringify(menu));
    const menuUpdated = menuDeepCopy.filter(
      (product) => product.id !== idProductToDelete
    );
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    const menuDeepCopy = JSON.parse(JSON.stringify(menu));
    const productToEdit = menu.findIndex(
      (product) => product.id === productBeingEdited.id
    );
    menuDeepCopy[productToEdit] = productBeingEdited;
    setMenu(menuDeepCopy);
  };

  const handleReset = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    handleEdit,
    handleReset,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    // isClick,
    // setIsClick,
    // inputRef,
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
