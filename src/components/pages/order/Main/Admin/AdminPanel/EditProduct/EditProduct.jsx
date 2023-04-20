import styled from "styled-components";
import { theme } from "../../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import ImagePreview from "../../../../../../reusable-ui/Admin/ImagePreview";
import { getInputsConfig } from "../../../../../../../utils/admin/inputsConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import EmptyEditProduct from "./EmptyEditProduct";

export default function EditProduct() {
  const {
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    // isClick,
  } = useContext(OrderContext);

  const inputs = getInputsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <EditProductStyled>
      {/* {isClick ? ( */}
      <div className="container-edit">
        <ImagePreview
          image={productSelected.imageSource}
          title={productSelected.title}
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
              ref={name === "title" ? titleEditRef : null}
            />
          ))}
        </div>
        <span className="edit-text">
          Cliquer sur un produit du menu pour le modifier
          <span className="underline">en temps réel</span>
        </span>
      </div>
      {/* ) : (
        <EmptyEditProduct />
      )} */}
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

    .edit-text {
      grid-area: 3 / 2 / 4 / -1;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.primary};
      .underline {
        margin-left: 5px;
        text-decoration: underline;
      }
    }
  }
`;
