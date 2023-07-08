import React from "react";
import {
  getSelectInputConfig,
  getTextInputConfig,
} from "../../../../../../../../../utils/admin/inputsConfig";
import TextInput from "../../../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../../../reusable-ui/SelectInput";
import styled from "styled-components";

const Inputs = React.forwardRef(
  ({ product, onChange, onFocus, onBlur }, ref) => {
    const inputTexts = getTextInputConfig(product);
    const inputSelects = getSelectInputConfig(product);

    return (
      <InputsStyled>
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            name={input.name}
            placeholder={input.placeholder}
            value={input.value}
            Icon={input.Icon}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="input"
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
        {inputSelects.map((inputSelect) => (
          <SelectInput
            {...inputSelect}
            key={inputSelect.id}
            value={inputSelect.value}
            name={inputSelect.name}
            options={inputSelect.options}
            className={inputSelect.className}
            Icon={inputSelect.Icon}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </InputsStyled>
    );
  }
);

const InputsStyled = styled.div`
  grid-area: 1 / 2 / -2 / 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 8px;
  width: 510px;

  .icon {
    margin: 0 15px 0 25px;
  }

  .input {
    height: 35px;
    margin: 0;
    padding: 0;
  }

  .input:first-child {
    grid-area: 1 / 1 / 2 / 4;
  }
  .input:nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
  }
  .input:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;

export default Inputs;
