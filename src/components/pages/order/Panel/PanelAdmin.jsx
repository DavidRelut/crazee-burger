import { useState } from "react";
import { theme } from "../../../../theme";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import styled from "styled-components";
export default function PanelAdmin() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputImageSource, setInputImageSource] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputTitle("");
    setInputImageSource("");
    setInputPrice("");
  };

  const handleChangeTitle = (event) => {
    setInputTitle(event.target.value);
  };
  const handleChangeImageSource = (event) => {
    setInputImageSource(event.target.value);
  };
  const handleChangePrice = (event) => {
    setInputPrice(event.target.value);
  };

  return (
    <div>
      <PanelAdminStyled action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputTitle}
          onChange={handleChangeTitle}
          name="title"
          placeholder="Nom du produit (ex: Super Burger)"
        />
        <input
          type="text"
          value={inputImageSource}
          onChange={handleChangeImageSource}
          name="imageSource"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
        />
        <input
          type="number"
          value={inputPrice}
          onChange={handleChangePrice}
          name="price"
          placeholder="Prix"
        />
        <PrimaryButton
          className="primary-button"
          label={"Ajouter un nouveau produit au menu"}
        />
      </PanelAdminStyled>
      <div className="product">
        <h2>{inputTitle}</h2>
        <img src={inputImageSource} alt="food" />
        <p>{inputPrice} €</p>
      </div>
    </div>
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
