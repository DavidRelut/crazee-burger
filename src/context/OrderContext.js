import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
  menu: [],
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleReset: () => {},
  newProduct: {},
  setNewProduct: () => {},
  productSelected: {},
  setProductSelected: () => {},
  // isClick: false,
  // setIsClick: () => {},
  // inputRef: {},
});
