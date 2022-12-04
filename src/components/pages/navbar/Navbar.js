import styled from 'styled-components';
import { theme } from '../../../theme';
import Logo from '../reusable-ui/Logo';
import Profile from './Profile';

export default function Navbar({ name }) {
  return (
    <NavbarStyled>
      <div className="logo">
        <Logo />
      </div>
      <Profile name={name} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px transparent black;
  border-radius: ${theme.borderRadius.extraRound}
  ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};
  box-shadow: -1px 9px 13px -1px rgba(0, 0, 0, 0.2);

  .logo {
    cursor: pointer;
    transform: scale(0.4);
    margin-left: 25px;
  }
`;
