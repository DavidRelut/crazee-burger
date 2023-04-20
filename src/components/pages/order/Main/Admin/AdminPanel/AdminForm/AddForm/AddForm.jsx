import { useContext, useState } from "react";
import OrderContext from "../../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../../enums/product";
import Button from "../../../../../../../reusable-ui/Button";
import Form from "../Form";
import SuccessMessage from "./SuccessMessage";
export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = { ...newProduct, id: crypto.randomUUID() };
    handleAdd(newProductToAdd);

    setNewProduct(EMPTY_PRODUCT);

    displaySubmitMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: [value] });
  };

  const displaySubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
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
