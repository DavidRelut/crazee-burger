import styled from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    font-size: ${theme.fonts.P2};
    margin-right: 8px;
    color: ${theme.colors.greyMedium};
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    width: 100%;
  }

  input:focus-visible {
    outline: 2px solid ${theme.colors.primary_burger2};
  }

  &::placeholder {
    color: ${theme.colors.greyLight};
  }
`;
