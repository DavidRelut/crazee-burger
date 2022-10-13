import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

    const [name, setName] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault();
      setName("");
      navigate(`/order/${name}`)
    };

    const handleChange = (event) => {
      setName(event.target.value);
    };

  return (
      <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
          />
        <button>Accéder à votre espace</button>
      </form>
  );
}