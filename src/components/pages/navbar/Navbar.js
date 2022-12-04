import styled from 'styled-components';
import { theme } from '../../../theme';
import Logo from '../reusable-ui/Logo';
import Profile from './Profile';

export default function Navbar({ name }) {
  return (
    <NavbarStyled>
      <Logo />
      <Profile name={name} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 70px 0 25px;

  border-bottom: 1px solid ${theme.colors.greyLight};
  background: ${theme.colors.white};
  box-shadow: -1px 9px 13px -1px rgba(0, 0, 0, 0.2);
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
