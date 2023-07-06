import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
// import { GoMegaphone } from "react-icons/go";
// import { FiPackage } from "react-icons/fi";

export const getInputsConfig = (inputValue) => [
  {
    id: 0,
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: inputValue.title,
    Icon: <FaHamburger />,
  },
  {
    id: 1,
    name: "imageSource",
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png",
    value: inputValue.imageSource,
    Icon: <BsFillCameraFill />,
  },
  {
    id: 2,
    name: "price",
    type: "text",
    placeholder: "Prix",
    value: inputValue.price ? inputValue.price : "",
    Icon: <MdOutlineEuro />,
  },
];
