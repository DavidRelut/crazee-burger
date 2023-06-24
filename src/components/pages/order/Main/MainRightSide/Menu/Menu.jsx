import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { find, isEmpty } from "../../../../../../utils/arrays";
import { getImageSource } from "../../../../../../utils/boolean";

export default function Menu() {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    handleReset,
    productSelected,
    setProductSelected,
    handleProductToEdit,
    titleEditRef,
    handleAddProductToBasket,
    handleDeleteBasketProduct,
  } = useContext(OrderContext);

  const isMenuEmpty = isEmpty(menu);

  if (isMenuEmpty) {
    return <EmptyMenu isModeAdmin={isModeAdmin} onReset={handleReset} />;
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete);
    if (idProductToDelete === productSelected.id) {
      setProductSelected(EMPTY_PRODUCT);
      titleEditRef.current.focus();
    }
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
            imageSource={getImageSource(imageSource)}
            price={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleCardDelete(event, id)}
            onAdd={(event) => handleAddButton(event, id)}
            onClick={() => handleProductToEdit(id, menu)}
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
