import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function SelectInput({
  id,
  name,
  value,
  options,
  onChange,
  className,
  Icon,
  ...extraProps
}) {
  return (
    <SelectInputStyled className={className}>
      <div className="icon-select">{Icon && Icon}</div>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...extraProps}
      >
        {options.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding-right: 18px;

  .icon-select {
    font-size: ${theme.fonts.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; // centre verticalement l'icône dans le champ select
    margin: 0 15px 0 15px;
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;
