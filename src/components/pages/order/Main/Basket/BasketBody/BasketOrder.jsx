import styled from "styled-components";
// import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";

export default function BasketOrder() {
  const { basketOrder, setBasketOrder, isModeAdmin } = useContext(OrderContext);

  const handleDeleteProductToBasket = (event, idProductToDelete) => {
    event.stopPropagation();
    const newBasketOrder = basketOrder.filter(
      (product) => product.id !== idProductToDelete
    );
    setBasketOrder(newBasketOrder);
  };

  return (
    <BasketOrderStyled className="cardbasket">
      {basketOrder.map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            price={formatPrice(price)}
            quantity={quantity}
            onDelete={(event) => handleDeleteProductToBasket(event, id)}
            isModeAdmin={isModeAdmin}
          />
        );
      })}
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div``;
