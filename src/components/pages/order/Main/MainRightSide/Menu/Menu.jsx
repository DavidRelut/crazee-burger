import styled from "styled-components";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
import { checkIfProductIsSelected } from "./helper";
import { EMPTY_PRODUCT, IMAGE_NO_STOCK } from "../../../../../../enums/product";
import { find, isEmpty } from "../../../../../../utils/arrays";
import { getImageSource } from "../../../../../../utils/boolean";
import Loader from "./Loader";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../../utils/string";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";
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

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    return (
      <EmptyMenu
        isModeAdmin={isModeAdmin}
        onReset={() => handleReset(username)}
      />
    );
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    if (idProductToDelete === productSelected.id) {
      setProductSelected(EMPTY_PRODUCT);
      titleEditRef.current.focus();
    }
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    const productToAdd = find(menu, idProductToAdd);
    handleAddProductToBasket(productToAdd, username);
  };

  let cardContainerClassName = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(
        ({ id, title, imageSource, price, isAvailable, isPublicised }) => {
          return (
            <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
              <div className={cardContainerClassName}>
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
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
                  overlapImageSource={IMAGE_NO_STOCK}
                  isOverlapImageVisible={
                    convertStringToBoolean(isAvailable) === false
                  }
                />
              </div>
            </CSSTransition>
          );
        }
      )}
    </TransitionGroup>
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

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      :hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;
