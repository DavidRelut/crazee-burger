import styled from "styled-components";
import { theme } from "../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, handleReset } =
    useContext(OrderContext);

  if (menu.length === 0) {
    return <EmptyMenu onReset={handleReset} />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: relative;
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.extraStrong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
