import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (inputValue) => [
  {
    id: 1,
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: inputValue.title,
    Icon: <FaHamburger />,
  },
  {
    id: 2,
    name: "imageSource",
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png",
    value: inputValue.imageSource,
    Icon: <BsFillCameraFill />,
  },
  {
    id: 3,
    name: "price",
    type: "text",
    placeholder: "Prix",
    value: inputValue.price,
    Icon: <MdOutlineEuro />,
  },
];
