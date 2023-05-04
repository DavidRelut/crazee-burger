import styled from "styled-components";
import { theme } from "../../theme";

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  background: ${theme.colors.background_dark};
  padding: 0px 16px;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
`;
