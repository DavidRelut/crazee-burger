import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
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
    const newSingleValue = event.target.value;
    const newSinglePropertyName = event.target.name;
    setNewProduct((newProduct) => ({
      ...newProduct,
      [newSinglePropertyName]: [newSingleValue],
    }));
  };

  const displaySubmitMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAdd({ ...newProduct, id: crypto.randomUUID() });

    setNewProduct(EMPTY_PRODUCT);

    displaySubmitMessage();
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
          <Button
            label="Ajouter un nouveau produit au menu"
            variant="success"
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
`;
