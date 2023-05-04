import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    isModeAdmin,
    handleDelete,
    handleReset,
    menu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
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

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  const handleClick = async (idProductClicked) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
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
            onDelete={(event) => handleCardDelete(event, id)}
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
