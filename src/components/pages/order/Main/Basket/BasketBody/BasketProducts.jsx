import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { checkIfProductIsSelected } from "../../MainRightSide/Menu/helper";
import { find } from "../../../../../../utils/arrays";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations";
import { isAvailableBasketPrice } from "../helper";
import { getImageSource } from "../../../../../../utils/boolean";

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
            classNames={"basket-animation"}
            key={menuProduct.id}
            timeout={300}
          >
            <BasketCard
              {...menuProduct}
              title={menuProduct.title}
              imageSource={getImageSource(menuProduct.imageSource)}
              price={isAvailableBasketPrice(
                menuProduct.isAvailable,
                menuProduct.price
              )}
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
  ${basketAnimation}
`;
