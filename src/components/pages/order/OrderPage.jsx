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
  const [editProduct, setEditProduct] = useState({});
  const [isClick, setIsClick] = useState(false);
  // const inputRef = useRef();

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

  const handleEdit = (productToEdit, event) => {
    console.log(productToEdit);
    const menuCopy = [...menu];
    const menuUpdate = menuCopy.map((product) =>
      product.id === productToEdit.id
        ? { ...productToEdit, [event.target.name]: event.target.value }
        : product
    );
    setMenu(menuUpdate);
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
    handleReset,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    editProduct,
    setEditProduct,
    handleEdit,
    isClick,
    setIsClick,
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
