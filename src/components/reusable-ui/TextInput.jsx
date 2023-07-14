import styled from "styled-components";
import { theme } from "../../theme";
import React from "react";

const TextInput = React.forwardRef(
  ({ value, onChange, Icon, className, ...extraProps }, ref) => {
    return (
      <TextInputStyled className={className}>
        <div className="icon">{Icon && Icon}</div>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          {...extraProps}
        />
      </TextInputStyled>
    );
  }
);

const TextInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    display: flex;
    align-items: center;
    font-size: ${theme.fonts.size.P1};
    margin-right: 10px;
    color: ${theme.colors.greyBlue};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    background-color: ${theme.colors.background_white};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyExtraLight};
    }
  }

  input:focus-visible {
    outline: 2px solid ${theme.colors.background_white};
  }

  &:active {
    background-color: ${theme.colors.background_white};
  }
`;

export default TextInput;
