import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";
import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";
import { loginUser } from "../../../firebase";
import { useEmail } from "../../../contexts/EmailContext";
// import useEmail from "../../../hooks/useEmail";

export default function PopLogin() {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const inputs = document.querySelectorAll("input");
  const [errorName, setErrorName] = useState("");
  const { setEmail } = useEmail();

  initializeRedBorder("input", removeRedBorder);
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setLoginData, loginData);
  };

  function isEmailValid(value: string): boolean {
    return EMAIL_REGEXP.test(value);
  }

  useEffect(() => {
    if (loginData.login.trim() && loginData.password.trim()) {
      setErrorName("");
    }
    setEmail(loginData.login);
  }, [loginData]);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isEmailValid(loginData.login.trim())) {
      inputs[0].classList.add("error-form");
      setErrorName("Некорректный email");
    } else if (!loginData.login.trim() && !loginData.password.trim()) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (!loginData.login.trim()) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (!loginData.password.trim()) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else
      loginUser({
        login: loginData.login,
        password: loginData.password,
      }).catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          setErrorName("Неправльные данные");
          inputs.forEach((input) => {
            addRedBorder(input as HTMLInputElement);
          });
        }
        if (
          error.message ===
          "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
        ) {
          setErrorName("Превышены запросы");
        }
      });
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
          placeholder="Email"
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
        {errorName === "Некорректный email" && (
          <div className="error-message">Введите корректный email</div>
        )}
        {errorName === "Неправльные данные" && (
          <div className="error-message">
            Эл. почта или пароль введены неверно, попробуйте еще раз.
            <Link to={appRoutes.RESET_MAIL} className="underline">
              Восстановить пароль?
            </Link>
          </div>
        )}
        {errorName === "Превышены запросы" && (
          <div className="error-message">
            Превышено количество запросов. Попробуйте позднее.
          </div>
        )}
        <button className="btn-green w-[280px] mt-[24px]" onClick={handleLogin}>
          Войти
        </button>
        <Link to={appRoutes.SIGNIN} className="btn-white">
          Зарегистироваться
        </Link>
      </form>
    </div>
  );
}
