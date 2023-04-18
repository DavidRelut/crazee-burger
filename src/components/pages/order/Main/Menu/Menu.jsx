import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatPrice } from "../../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import EmptyMenu from "./EmptyMenu";
const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const {
    isModeAdmin,
    handleDelete,
    handleReset,
    menu,
    setProductSelected,
    editProduct,
    setEditProduct,
    setCurrentTabSelected,
    setIsCollapsed,
    setIsClick,
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
  // const handleClickProductToEdit = (productSelected) => {
  //   setIsClick(true);
  //   setEditProduct(productSelected);
  //   setCurrentTabSelected("edit");
  //   setIsCollapsed(false);
  //   inputRef.current.focus();
  //   console.log(inputRef);
  // };

  const handleClick = (idProductClicked) => {
    const productSelected = menu.find(
      (product) => product.id === idProductClicked
    );
    setProductSelected(productSelected);
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
            // handleClickProductToEdit({ id, title, imageSource, price })
            // }
            className={
              isModeAdmin === true && editProduct.id === id ? "is-click" : ""
            }
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

  .is-click {
    background: ${theme.colors.primary};

    .delete-btn {
      color: ${theme.colors.white};
      &:hover {
        color: ${theme.colors.danger};
      }
      :active {
        color: ${theme.colors.white};
      }
    }
    .primary-button {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
