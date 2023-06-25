import React from "react";
import { getInputsConfig } from "../../../../../../../../utils/admin/inputsConfig";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../../../reusable-ui/TextInput";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    const inputTexts = getInputsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map(({ id, type, name, placeholder, value, Icon }) => (
            <TextInput
              key={id}
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              Icon={Icon}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              className="input"
              ref={ref && name === "title" ? ref : null}
            />
          ))}
          <div className="form-footer">{children}</div>
        </div>
      </FormStyled>
    );
  }
);

const FormStyled = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
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

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 455px;
  }
`;

export default Form;
