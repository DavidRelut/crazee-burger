import React from "react";
import {
  getSelectInputConfig,
  getTextInputConfig,
} from "../../../../../../../../utils/admin/inputsConfig";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../../reusable-ui/SelectInput";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    const inputTexts = getTextInputConfig(product);
    const inputSelects = getSelectInputConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map(({ id, name, placeholder, value, Icon }) => (
            <TextInput
              key={id}
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

          {inputSelects.map(({ id, value, name, options, className }) => (
            <SelectInput
              key={id}
              value={value}
              name={name}
              options={options}
              className={className}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;

    .input:first-child {
      grid-area: 1 / 1 / 2 / 4;
    }
    .input:nth-child(2) {
      grid-area: 2 / 1 / 3 / 4;
    }
    .input:nth-child(3) {
      grid-area: 3 / 1 / 4 / 2;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 455px;
    grid-area: 4 / 1 / 5 / 4;
  }
`;

export default Form;
