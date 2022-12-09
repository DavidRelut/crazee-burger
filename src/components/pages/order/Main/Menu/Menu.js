import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../../fakeData/fakeMenu';
import Card from './Card';
import { theme } from '../../../../../theme/index';

export default function MenuCard() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map((product) => {
        return <div className='product'>{ product.title }</div>
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .product {
    background: ${theme.colors.incognito};
    width: 240px;
    height: 330px;
  }
`;
