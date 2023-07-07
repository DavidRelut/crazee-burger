import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { isAvailableOptions, isPublicisedOptions } from "../../enums/select";

export const getTextInputConfig = (inputValue) => [
  {
    id: 0,
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: inputValue.title,
    Icon: <FaHamburger />,
  },
  {
    id: 1,
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: inputValue.imageSource,
    Icon: <BsFillCameraFill />,
  },
  {
    id: 2,
    name: "price",
    placeholder: "Prix",
    value: inputValue.price ? inputValue.price : "",
    Icon: <MdOutlineEuro />,
  },
];

export const getSelectInputConfig = (newProduct) => [
  {
    id: 3,
    name: "isAvailable",
    value: newProduct.isAvailable,
    options: isAvailableOptions,
    Icon: <FiPackage />,
    className: "is-available",
  },
  {
    id: 4,
    name: "isPublicised",
    value: newProduct.isPublicised,
    options: isPublicisedOptions,
    Icon: <GoMegaphone />,
    className: "is-publicised",
  },
];
