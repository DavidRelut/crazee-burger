import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = [
  { index: "add", label: "Ajouter un produit", Icon: <BsPlusLg /> },
  { index: "edit", label: "Modifier un produit", Icon: <MdModeEditOutline /> },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
