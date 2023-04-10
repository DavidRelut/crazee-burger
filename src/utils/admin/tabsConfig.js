import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "../../components/pages/order/Main/Admin/AdminPanel/AddProduct/AddProduct";
import EditProduct from "../../components/pages/order/Main/Admin/AdminPanel/EditProduct/EditProduct";

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <BsPlusLg />,
    Panel: <AddProduct />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: <EditProduct />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
