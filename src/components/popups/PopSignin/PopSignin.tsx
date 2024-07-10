import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";
import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";

export default function PopSignin() {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const inputs = document.querySelectorAll("input");
  const [errorName, setErrorName] = useState("");
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  initializeRedBorder("input", removeRedBorder);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setSigninData, signinData);
  };

  function isEmailValid(value: string): boolean {
    return EMAIL_REGEXP.test(value);
  }

  useEffect(() => {
    if (
      signinData.email.length !== 0 &&
      signinData.password.length !== 0 &&
      signinData.repeatPassword.length !== 0
    ) {
      setErrorName("");
    }
    if (
      signinData.password === signinData.repeatPassword &&
      signinData.email.length !== 0
    ) {
      inputs.forEach((element) => {
        element.classList.remove("error-form");
      });
    } else if (signinData.password === signinData.repeatPassword) {
      inputs[1]?.classList.remove("error-form");
      inputs[2]?.classList.remove("error-form");
    }
  }, [signinData]);

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isEmailValid(signinData.email)) {
      inputs[0].classList.add("error-form");
      setErrorName("Некорректный email");
    } else if (
      signinData.email.length === 0 &&
      signinData.password.length === 0 &&
      signinData.repeatPassword.length === 0
    ) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (signinData.email.length === 0) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (signinData.password.length === 0) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (signinData.repeatPassword.length === 0) {
      inputs[2].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (signinData.password !== signinData.repeatPassword) {
      inputs[1].classList.add("error-form");
      inputs[2].classList.add("error-form");
      setErrorName("Пароли не совпадают");
    } else
      alert(`Логин: ${signinData.email} 
Пароль: ${signinData.password}
Повторение пароля: ${signinData.repeatPassword}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="logo-container">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="form-container">
          <input
            type="email"
            name="email"
            placeholder="Эл. почта"
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
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            className="text-area"
            onChange={handleInput}
            id="input3"
          />
          {errorName === "Не введены данные" && (
            <div className="error-message">Не все поля заполнены</div>
          )}
          {errorName === "Пароли не совпадают" && (
            <div className="error-message">Пароли не совпадают</div>
          )}
          {errorName === "Некорректный email" && (
            <div className="error-message">Введите корректный email</div>
          )}

          <button
            onClick={handleRegister}
            className="btn-green w-[280px] mt-[24px]"
          >
            Зарегистироваться
          </button>
          <Link to={appRoutes.LOGIN} className="btn-white">
            Войти
          </Link>
        </form>
      </div>
    </div>
  );
}
