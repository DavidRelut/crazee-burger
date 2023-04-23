import styled from "styled-components";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import BasketCard from "./BasketCard";

export default function BasketOrder() {
  const { basketOrder } = useContext(OrderContext);
  // console.log("basketOrder", basketOrder);

  return (
    <BasketOrderStyled>
      {basketOrder.map(({ id, title, imageSource, price, quantity }) => {
        return (
          <BasketCard
            key={id}
            title={title}
            imageSource={imageSource}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </BasketOrderStyled>
  );
}

const BasketOrderStyled = styled.div`
  /* color: ${theme.colors.greyBlue}; */
  .basket {
    color: blueviolet;
    font-size: 30px;
  }
`;
