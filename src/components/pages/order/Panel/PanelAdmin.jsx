import { useState } from "react";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
export default function PanelAdmin({ handleAdd }) {
  let EMPTY_PRODUCT = {
    title: "",
    imageSource: "",
    price: "",
  };

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    const { title, imageSource, price } = EMPTY_PRODUCT;
    const productToAdd = { id, title, imageSource, price };
    handleAdd(productToAdd);
    setNewProduct(EMPTY_PRODUCT);
  };

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <PanelAdminStyled action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newProduct.title}
        onChange={handleChange}
        name="title"
        placeholder="Nom du produit (ex: Super Burger)"
      />
      <input
        type="text"
        value={newProduct.imageSource}
        onChange={handleChange}
        name="imageSource"
        placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
      />
      <input
        type="number"
        value={newProduct.price}
        onChange={handleChange}
        name="price"
        placeholder="Prix"
      />
      <PrimaryButton
        className="primary-button"
        label={"Ajouter un nouveau produit au menu"}
      />
      <h1>{newProduct.title}</h1>
      <p>{newProduct.imageSource}</p>
      <span>{newProduct.price}</span>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

  .primary-button {
    background-color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.XS};
    cursor: pointer;
    padding: 12px;
    width: 275.28px;
    height: 35px;

    :hover {
      color: ${theme.colors.success};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.success};
      transition: all 200ms ease-out;
    }
    :active {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
    }
  }

  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }
`;
