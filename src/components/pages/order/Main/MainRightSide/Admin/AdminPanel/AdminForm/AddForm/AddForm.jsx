import { useContext } from "react";
import OrderContext from "../../../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../../../enums/product";
import Button from "../../../../../../../../reusable-ui/Button";
import Form from "../Form";
import SuccessMessage from "./SuccessMessage";
import { useSuccessMessage } from "../../../../../../../../../hooks/useSuccessMessage";
export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = { ...newProduct, id: crypto.randomUUID() };
    handleAdd(newProductToAdd);

    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button label="Ajouter un nouveau produit au menu" variant="success" />
        {isSubmitted && <SuccessMessage />}
      </>
    </Form>
  );
}
