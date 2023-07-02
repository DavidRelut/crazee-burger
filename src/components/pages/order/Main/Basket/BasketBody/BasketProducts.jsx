import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";
import { checkIfProductIsSelected } from "../../MainRightSide/Menu/helper";
import { find } from "../../../../../../utils/arrays";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
  const {
    basket,
    menu,
    username,
    isModeAdmin,
    handleDeleteBasketProduct,
    productSelected,
    handleProductToEdit,
  } = useContext(OrderContext);

  return (
    <TransitionGroup component={BasketProductsStyled}>
      {basket.map((basketProduct) => {
        const menuProduct = find(menu, basketProduct.id);
        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={menuProduct.id}
            timeout={5000}
          >
            <BasketCard
              {...menuProduct}
              title={menuProduct.title}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              price={formatPrice(menuProduct.price)}
              quantity={basketProduct.quantity}
              onDelete={() =>
                handleDeleteBasketProduct(menuProduct.id, username)
              }
              onClick={() => handleProductToEdit(menuProduct.id, basket)}
              isHoverable={isModeAdmin}
              isSelected={checkIfProductIsSelected(
                menuProduct.id,
                productSelected.id
              )}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  .animation-basket-appear {
    transform: translateX(500px);
    opacity: 0%;
  }
  .animation-basket-appear-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }

  .animation-basket-enter {
    transform: translateX(500px);
    opacity: 0%;
  }
  .animation-basket-enter-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }

  .animation-basket-exit {
    transform: translateX(0px);
    opacity: 100%;
  }

  .animation-basket-exit-active {
    transition: 0.5s;
    transform: translateX(-500px);
    opacity: 0%;
  }
`;
