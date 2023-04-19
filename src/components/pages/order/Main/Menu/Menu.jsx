import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsSelected } from "./helper";
const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    isModeAdmin,
    handleDelete,
    handleReset,
    menu,
    productSelected,
    setProductSelected,
    // setCurrentTabSelected,
    // setIsCollapsed,
    // setIsClick,
    // inputRef,
  } = useContext(OrderContext);

  if (menu.length === 0) {
    return isModeAdmin ? (
      <EmptyMenu
        title="Le menu est vide ?"
        description="Cliquez ci-dessous pour le réinitialiser"
        isModeAdmin={isModeAdmin}
        onReset={handleReset}
      />
    ) : (
      <EmptyMenu
        title="Victime de notre succès ! :D"
        description="De nouvelles recettes sont en cours de préparation."
      />
    );
  }

  const handleClick = (idProductClicked) => {
    const productClicked = menu.find(
      (product) => product.id === idProductClicked
    );
    setProductSelected(productClicked);
  };

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
            price={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsSelected(id, productSelected.id)}
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
`;
