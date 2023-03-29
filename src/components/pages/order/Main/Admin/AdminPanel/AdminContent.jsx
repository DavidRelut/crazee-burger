import { useState } from "react";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { getInputsConfig } from "../../../../../../utils/admin/inputsConfig";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
export default function AdminContent({ handleAdd }) {
  let EMPTY_PRODUCT = {
    title: "",
    imageSource: "",
    price: "",
  };

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const inputs = getInputsConfig(newProduct);

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
    <AdminContentStyled action="submit" onSubmit={handleSubmit}>
      <div className="image-container">
        <img
          src={newProduct.imageSource}
          alt={newProduct.title ? newProduct.title : "image preview"}
        />
      </div>

      <div className="input-fields">
        {inputs.map(({ id, type, name, placeholder, value, Icon }) => (
          <TextInput
            key={id}
            Icon={Icon}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            className="input"
          />
        ))}
        <PrimaryButton
          className="primary-button"
          label="Ajouter un nouveau produit au menu"
        />
      </div>
      {/* 
      <div className="input-container">
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
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={handleChange}
          name="price"
          placeholder="Prix"
        /> */}
      {/* <div className="success"> */}

      {/* <div className="success-txt">
        // import { FiCheck } from "react-icons/fi";
            <FiCheck />
            <span>Ajouté avec succès !</span>
          </div>
        </div> */}
      {/* </div> */}
      {/* <h1>{newProduct.title}</h1>
      <p>{newProduct.imageSource}</p>
      <span>{newProduct.price}</span>
      <img src={newProduct.imageSource} alt={newProduct.title} /> */}
    </AdminContentStyled>
  );
}

const AdminContentStyled = styled.form`
  /* height: 100%; */
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  /* grid-template-rows: repeat(4, 1fr); */
  grid-column-gap: 20px;
  /* grid-row-gap: 8px; */
  margin-left: 54px;
  margin-top: 35px;

.icon {
  margin: 0 15px 0 25px;
}

  .input {
    height: 35px;
    margin: 0;
    padding: 0;
  }

  .input-fields {
    grid-area: 1 / 2 / 4 / -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 8px;
  }

  .image-container {
    box-sizing: border-box;
    width: 220px;
    height: 145px;
    border: 1px solid ${theme.colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

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

  /* .success {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 455px;
  } */

  /* .success-txt {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */
`;
