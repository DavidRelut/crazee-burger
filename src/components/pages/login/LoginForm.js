import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro"
import background_img from '../../../images/burger_background.jpg';
import { theme } from "../../../theme";

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
      <div className="login-card">
        <h1 className="global_text font_amatic-sc">Bienvenue chez nous !</h1>
        <hr />
        <h2 className="global_text font_amatic-sc">Connectez-vous</h2>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
          className="font_open-sans"
        />
        <button className="font_open-sans btn">Accéder à votre espace</button>
      </div>
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

  display: flex;
  justify-content: center;
  align-items: center;

  .login-card {
    width: 300px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .global_text {
    color: ${theme.colors.white};
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${theme.fonts.P4};
  }

  h2 {
    font-size: ${theme.fonts.P3_bis};
    margin: 10px 0 0 0;
  }

  hr {
    width: 100%;
    background: ${theme.colors.primary_burger2};
    border: 1px solid ${theme.colors.primary_burger2};
    border-radius: 0.5px;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border-style: none;
  }

  input::placeholder {
    font-size: ${theme.fonts.XS};
    padding: 0 0 0 2rem;
  }

  button {
    width: 100%;
    height: 2.5rem;
    border-radius: 5px;
    border-style: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  .btn {
    font-size: ${theme.fonts.XS};
  }
`;