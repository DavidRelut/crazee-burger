import { createContext } from "react";

export default createContext({
  menu: [],
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
});
