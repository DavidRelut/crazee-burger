import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { theme } from "../../../theme";
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
      <div className="font_amatic-sc">
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>

      <div className="font_open-sans">
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input 
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button>Accéder à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2em;
  border-radius: ${theme.borderRadius.round};

  hr {
    background-color: ${theme.colors.primary_burger2};
    border: 1.5px solid ${theme.colors.primary_burger2};
    margin-bottom: 40px;
  }
  
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  
  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.P4};
  }

  .input-with-icon {
    background-color: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: ${theme.colors.greyMedium};
    }

    input {
      border: none;
      font-size: 15px;
      color: ${theme.colors.dark};
    }

     &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
     }
  }
`;