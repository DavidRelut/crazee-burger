import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled className="button-with-icon">
      <span>{ label }</span>
      { Icon && Icon }
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;

    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.heavy};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger2};
    border: 1px solid ${theme.colors.primary_burger2};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger2};
      border: 1px solid ${theme.colors.primary_burger2};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger2};
      border: 1px solid ${theme.colors.primary_burger2};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;