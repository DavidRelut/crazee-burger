import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro"
// import { theme } from "../../../theme";
import background_img from '../../../images/burger_background.jpg';

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
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
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
      </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  width: 100vw;
  height: 100vh;
  background-image: url(${background_img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    margin: 0;
    padding: 0;
  }
`;