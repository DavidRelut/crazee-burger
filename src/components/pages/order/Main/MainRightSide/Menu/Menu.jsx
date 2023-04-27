import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { find } from "../../../../../../utils/arrays";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    handleReset,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
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
    handleDeleteBasketProduct(idProductToDelete);
    if (idProductToDelete === productSelected.id) {
      setProductSelected(EMPTY_PRODUCT);
      titleEditRef.current.focus();
    }
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

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    const productToAdd = find(menu, idProductToAdd);
    handleAddProductToBasket(productToAdd);
  };

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            price={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onAdd={(event) => handleAddButton(event, id)}
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
