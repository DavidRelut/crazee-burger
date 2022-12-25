import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FaHamburger } from "react-icons/fa";
import { MdEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export default function PanelAdmin() {
  return (
    <PanelAdminStyled>
      <div class="admin-container">
        <form action="submit" className="form">
          <div class="image-preview">
            <div class="empty-image">Aucune image</div>
          </div>
          <div class="text-inputs">
            <div class="input-content first-row">
              <FaHamburger className="icon" />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Produit (ex: Super Burger)"
                value=""
              />
            </div>
            <div class="input-content second-row">
              <BsFillCameraFill className="icon" />
              <input
                type="text"
                name="imageSource"
                placeholder="Lien URL d'une image (ex: https://photo-frites.png)"
                value=""
              />
            </div>
            <div class="third-row">
              <div class="input-content">
                <MdEuro className="icon" />
                <input type="text" name="price" placeholder="Prix" value="" />
              </div>
              <div class="option">
                <FiPackage className="icon" />
                <select name="isAvailable">
                  <option value="true">En stock</option>
                  <option value="false">En rupture</option>
                </select>
              </div>
              <div class="option">
                <GoMegaphone className="icon" />
                <select name="isAdvertised">
                  <option value="false">Sans pub</option>
                  <option value="true">Avec pub</option>
                </select>
              </div>
            </div>
          </div>
          <div class="submitButton">
            <button>Ajouter un nouveau produit au menu</button>
          </div>
        </form>
      </div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  .admin-container {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px -2px 8px -2px;
    height: 13em;
    padding: 25px 30px 20px 60px;
    display: flex;
    align-items: flex-start;
    border-top: 1px solid rgb(228, 229, 233);
    border-bottom-right-radius: 15px;
  }

  .form {
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: 70% 1fr;
    gap: 8px 20px;
    width: 70%;
    height: 11em;
    margin: auto 0px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-self: flex-start;
  }

  .form .image-preview {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
  }

  .form .image-preview .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(228, 229, 233);
    line-height: 1.5;
    color: rgb(147, 162, 177);
    border-radius: 5px;
  }

  .form .text-inputs {
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 8px;
  }

  .form .text-inputs .first-row {
    grid-area: 1 / 1 / 2 / 4;
  }

  .input-content {
    background-color: rgb(245, 245, 247);
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 16px;
  }

  .icon {
    font-size: 18px;
    margin-right: 12.8px;
    color: rgb(116, 123, 145);
    min-width: 1em;
  }
  input {
    background: rgb(245, 245, 247);
    border: none;
    font-size: 15px;
    color: rgb(23, 22, 26);
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  .form .text-inputs .second-row {
    grid-area: 2 / 1 / 2 / 4;
  }

  .form .text-inputs .third-row {
    grid-area: 3 / 1 / 4 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 8px;
  }

  .form .text-inputs .third-row > div:nth-child(1) {
    grid-column: 1 / 2;
  }

  .form .text-inputs .third-row > div:nth-child(2) {
    grid-column: 2 / 3;
  }

  .option {
    background-color: rgb(245, 245, 247);
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 16px;
  }

  .option select {
    background: rgb(245, 245, 247);
    border: none;
    font-size: 15px;
    color: rgb(23, 22, 26);
    width: 100%;
    outline: 0px;
  }

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }

  .form .text-inputs .third-row > div:nth-child(3) {
    grid-column: 3 / 4;
  }

  .form .submitButton {
    grid-area: 2 / 2 / 3 / 3;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .form .submitButton button {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background: rgb(96, 189, 79);
    border: 1px solid rgb(96, 189, 79);
    border-radius: 5px;
    height: 35px;
    padding: 0px px 1.5em;
    font-weight: 600;
  }

  .form .submitButton button:hover {
    background: rgb(255, 255, 255);
    color: rgb(96, 189, 79);
    border: 1px solid rgb(96, 189, 79);
  }
`;
