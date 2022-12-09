// import { useState } from 'react';
import styled from 'styled-components';
// import { fakeDatas } from '../../../../../fakeData/fakeMenu';
import { theme } from '../../../../../theme';
// import Card from './Card';

export default function MenuCard() {
  // const [cards, setCards] = useState(fakeDatas);

  return (
    <MenuStyled>
      Menu
      {/* {cards.map((card) => {
        return (
          <div key={card.id}>
            <Card {...card} />
          </div>
        );
      })} */}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.green};
`;
