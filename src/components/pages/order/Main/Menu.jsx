import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import PanelAdmin from "../Panel/PanelAdmin";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  const handleAdd = (productToAdd) => {
    //1. copie du state
    const productsCopy = [...menu];

    //2. manipulation sur la copie du state
    productsCopy.push(productToAdd);

    //3. modifier le state avec le setter
    setMenu(productsCopy);
  };

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
      <PanelAdmin handleAdd={handleAdd} />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
