import { useContext, useState } from "react";
import { theme } from "../../../../../../theme";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import { getInputsConfig } from "../../../../../../utils/admin/inputsConfig";
import { EMPTY_PRODUCT } from "../../../../../../utils/admin/emptyProduct";
import ImagePreview from "./ImagePreview";
import SuccessMessage from "./SuccessMessage";
export default function AddProduct() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSuccess, setIsSuccess] = useState(false);

  const inputs = getInputsConfig(newProduct);

  const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdd({ ...newProduct, id: crypto.randomUUID() });

    setNewProduct(EMPTY_PRODUCT);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <AddProductStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview image={newProduct.imageSource} title={newProduct.title} />

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
        <div className="success-container">
          <PrimaryButton
            className="success-button"
            label="Ajouter un nouveau produit au menu"
          />

          {isSuccess && <SuccessMessage />}
        </div>
      </div>
    </AddProductStyled>
  );
}

const AddProductStyled = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  margin-left: 54px;
  margin-top: 35px;

  /* INPUTS */
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

  /* SUCCESS CONTAINER */
  .success-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 455px;
  }
  /* SUCCESS BUTTON */
  .success-button {
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
`;
