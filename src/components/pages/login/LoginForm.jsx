import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { authenticateUser } from "../../../api/users";
import Welcome from "./Welcome";

export default function LoginForm() {
  const [username, setUsername] = useState("DavidR");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    authenticateUser(username);

    setUsername("");
    navigate(`/order/${username}`);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div className="font_open-sans">
        <TextInput
          value={username}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
          Icon={<BsPersonCircle />}
        />

        <Button label="Accéder à mon espace" Icon={<IoChevronForward />} />
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
    background-color: ${theme.colors.loginLine};
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: 40px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }
`;
