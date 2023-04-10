import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import { getInputsConfig } from "../../../../../../utils/admin/inputsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function EditProduct() {
  const { editProduct, setEditProduct, handleEdit, isClick } =
    useContext(OrderContext);

  const inputs = getInputsConfig(editProduct);

  const handleChange = (event) => {
    // console.log(event.target);
    const newSingleValue = event.target.value;
    const newSinglePropertyName = event.target.name;
    setEditProduct(() => ({
      ...editProduct,
      [newSinglePropertyName]: newSingleValue,
    }));
    handleEdit(editProduct, event);
  };

  return (
    <EditProductStyled>
      {isClick ? (
        <div className="container-edit">
          <ImagePreview
            image={editProduct.imageSource}
            title={editProduct.title}
          />
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
          </div>
        </div>
      ) : (
        <div className="container-text">
          <span className="edit-message">
            Cliquer sur un produit pour le modifier
          </span>
          <HiCursorClick />
        </div>
      )}
    </EditProductStyled>
  );
}

const EditProductStyled = styled.div`
  .container-edit {
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
  }
`;
