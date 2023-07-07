import React from "react";
import styled from "styled-components";

export default function SelectInput({
  id,
  name,
  value,
  options,
  onChange,
  className,
}) {
  return (
    <SelectInputStyled
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    >
      {options.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select``;
