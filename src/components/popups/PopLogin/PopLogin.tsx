import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";
import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";

type PopLoginType = {
  openPopSignin?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  transitionFromMainPage?: boolean
}
export default function PopLogin({ openPopSignin, transitionFromMainPage }: PopLoginType) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const inputs = document.querySelectorAll("input");
  const [errorName, setErrorName] = useState("");

  initializeRedBorder("input", removeRedBorder);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setLoginData, loginData);
  };

  useEffect(() => {
    if (loginData.login.length !== 0 && loginData.password.length !== 0) {
      setErrorName("");
    }
  }, [loginData]);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loginData.login.length === 0 && loginData.password.length === 0) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (loginData.login.length === 0) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (loginData.password.length === 0) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else
      alert(`Логин: ${loginData.login} 
Пароль: ${loginData.password}`);
  };

  return (
    <div className="popup-container">
      <div className="logo-container">
        <img src="../public/logo.png" alt="logo" />
      </div>
      <form className="form-container">
        <input
          type="text"
          name="login"
          placeholder="Логин"
          className="text-area"
          onChange={handleInput}
          id="input1"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          className="text-area"
          onChange={handleInput}
          id="input2"
        />
        {errorName === "Не введены данные" && (
          <div className="error-message">Не все поля заполнены</div>
        )}
        <button className="btn-green w-[280px] mt-[24px]" onClick={handleLogin}>
          Войти
        </button>
        {transitionFromMainPage ?
          <button onClick={openPopSignin} className="btn-white">
            Зарегистироваться
          </button> :
          <Link to={appRoutes.SIGNIN} className="btn-white">
            Зарегистироваться
          </Link>
        }
      </form>
    </div>
  );
}
