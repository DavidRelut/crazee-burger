import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function Button({
  label,
  Icon,
  className,
  onClick,
  variant = "normal",
}) {
  return (
    <ButtonStyled className={className} onClick={onClick} variant={variant}>
      <span>{label}</span>
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ variant }) => buttonStyle[variant]}
`;

const normalStyle = css`
  width: 100%;
  border: 1px solid {theme.colors.greyLight};
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
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`;

const successStyle = css`
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.XS};
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;
  padding: 12px;
  width: 275.28px;
  height: 35px;

  :hover {
    color: ${theme.colors.success};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
  }
`;

const buttonStyle = {
  normal: normalStyle,
  success: successStyle,
};
