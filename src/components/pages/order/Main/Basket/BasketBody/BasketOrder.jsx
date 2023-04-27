import styled from "styled-components";
// import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";
import { formatPrice } from "../../../../../../utils/maths";
import { IMAGE_COMING_SOON } from "../../../../../../enums/product";

export default function BasketOrder() {
  const { basket, isModeAdmin, handleDeleteBasketProduct } =
    useContext(OrderContext);

  const handleOnDelete = (idProductToDelete) => {
    handleDeleteBasketProduct(idProductToDelete);
  };

  return (
    <BasketOrderStyled className="cardbasket">
      {basket.map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            price={formatPrice(price)}
            quantity={quantity}
            onDelete={(event) => handleOnDelete(id)}
            isModeAdmin={isModeAdmin}
          />
        );
      })}
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div``;
