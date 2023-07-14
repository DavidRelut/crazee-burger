import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useRef } from "react";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import { BACKGROUND_IMAGE } from "../../../enums/product";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, handleReset } =
    useMenu();
  const {
    basket,
    setBasket,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
  } = useBasket();
  const { username } = useParams();

  const handleProductToEdit = async (idProductClicked, menuOrBasket) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menuOrBasket.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
    // eslint-disable-next-line
  }, []);

  const orderContextValue = {
    username,
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
    titleEditRef,
    basket,
    setBasket,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
    handleProductToEdit,
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
  background: ${theme.colors.primary} url(${BACKGROUND_IMAGE}) repeat;
  background-size: 100px;
  background-blend-mode: multiply;

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
