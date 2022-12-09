import styled from 'styled-components';
import { theme } from '../../../../theme';
import Logo from '../../reusable-ui/Logo';
import Profile from './Profile';

export default function Navbar({ name }) {
  return (
    <NavbarStyled>
      <Logo />
      <Profile name={ name } />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 70px 0 25px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
`;
