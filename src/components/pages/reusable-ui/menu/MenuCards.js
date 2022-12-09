import { useState } from "react";
import styled from "styled-components";
import { fakeDatas } from "../../../../fakeData/fakeMenu";
import Card from "./Card";

export default function MenuCard() {

  const [cards, setCards] = useState(fakeDatas)

  return (
    <MenuCardsStyled>
      {cards.map(card => {
        return <div key={card.id}><Card { ...card } /></div>
      })}
    </MenuCardsStyled>
  )
}

const MenuCardsStyled = styled.div`
  
`;