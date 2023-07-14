import { useContext, useState } from "react";
import OrderContext from "../../../../../../../../../context/OrderContext";
import Form from "../Form/Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingEditMessage from "./SavingEditMessage";
import { useSuccessMessage } from "../../../../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated, username);
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccessMessage();
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingEditMessage /> : <EditInfoMessage />}
    </Form>
  );
}
