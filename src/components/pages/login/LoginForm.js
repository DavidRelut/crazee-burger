import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components/macro"
import { theme } from "../../../theme";
import background_img from '../../../images/burger_background.jpg';
import logo from '../../../images/logo-orange.png';
import { BsPersonCircle } from 'react-icons/bs';

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
      <h1 className="title font_amatic-sc">
        Crazee <div className="logo"></div> Burger
      </h1>
      <div className="login-card">
        <h1 className="global_text font_amatic-sc">Bienvenue chez nous !</h1>
        <hr />
        <h2 className="global_text font_amatic-sc">Connectez-vous</h2>
        <div className="input-card">
          <BsPersonCircle className="bsPersonCircle" />
          <input
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
            className="font_open-sans"
          />
        </div>
        <button className="font_open-sans btn">Accéder à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  width: 100vw;
  height: 100vh;

  background: url(${background_img}) center center / cover rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    color: ${theme.colors.primary_burger};
    font-size: ${theme.fonts.P7};
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    letter-spacing: ${theme.spacing.xxs};
    font-weight: ${theme.weights.bold};
  }

  .logo {
    width: 170px;
    height: 170px;
    background-image: url(${logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 10px;
  }

  .login-card {
    width: 430px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 70px;
  }

  .global_text {
    color: ${theme.colors.white};
  }

  h1 {
    margin: 0;
    padding: 0;
    font-size: ${theme.fonts.P5};
  }

  h2 {
    font-size: ${theme.fonts.P4};
    margin: 20px 0 10px 0;
  }

  hr {
    width: 100%;
    background: ${theme.colors.primary_burger2};
    border: 1.2px solid ${theme.colors.primary_burger2};
    border-radius: 0.5px;
  }

  .input-card {
    background-color: ${theme.colors.white};
    display: inline-flex;
    justify-content: initial;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-radius: ${theme.borderRadius.round};
  }

  .bsPersonCircle {
    padding: 0 12px 0 20px;
    color: ${theme.colors.greyDark};
  }

  input {
    width: 83%;
    border-style: none;
    outline: none;
    padding: 4px;
    font-size: ${theme.fonts.XS};
  }

  input:focus {
    padding: 2px;
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
  }

  button {
    width: 100%;
    height: 3rem;
    border-radius: ${theme.borderRadius.round};
    border-style: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    margin-top: 10px;
  }

  .btn {
    font-size: ${theme.fonts.XS};
  }

  .btn:hover {
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
`;