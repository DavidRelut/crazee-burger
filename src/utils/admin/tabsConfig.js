import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import AddProduct from "../../components/pages/order/Main/Admin/AdminPanel/AddProduct/AddProduct";
import EditProduct from "../../components/pages/order/Main/Admin/AdminPanel/EditProduct/EditProduct";
import EmptyEditProduct from "../../components/pages/order/Main/Admin/AdminPanel/EditProduct/EmptyEditProduct";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
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
    Panel: hasAlreadyBeenClicked ? <EditProduct /> : <EmptyEditProduct />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
