import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "../../components/pages/order/Main/MainRightSide/Admin/AdminPanel/AdminForm/AddForm/AddForm";
import EditForm from "../../components/pages/order/Main/MainRightSide/Admin/AdminPanel/AdminForm/EditForm/EditForm";
import EmptyEditForm from "../../components/pages/order/Main/MainRightSide/Admin/AdminPanel/AdminForm/EditForm/EmptyEditForm";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <BsPlusLg />,
    Panel: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: hasAlreadyBeenClicked ? <EditForm /> : <EmptyEditForm />,
  },
];

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
