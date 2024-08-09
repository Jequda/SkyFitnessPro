import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";
import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";
import { signupUser } from "../../../firebase";

type PopSigninType = {
  openPopLogin?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  transitionFromMainPage?: boolean;
};

export default function PopSignin({
  openPopLogin,
  transitionFromMainPage,
}: PopSigninType) {
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
      !signinData.email.trim() &&
      !signinData.password.trim() &&
      !signinData.repeatPassword.trim()
    ) {
      setErrorName("");
    }
    if (
      !signinData.password === !signinData.repeatPassword &&
      !signinData.email.trim()
    ) {
      inputs.forEach((element) => {
        element.classList.remove("error-form");
      });
    } else if (
      signinData.password === signinData.repeatPassword &&
      signinData.password.length > 5 &&
      signinData.repeatPassword.length > 5
    ) {
      inputs[1]?.classList.remove("error-form");
      inputs[2]?.classList.remove("error-form");
      setErrorName("");
    }
  }, [signinData]);

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isEmailValid(signinData.email.trim())) {
      inputs[0].classList.add("error-form");
      setErrorName("Некорректный email");
    } else if (
      !signinData.email.trim() &&
      !signinData.password.trim() &&
      !signinData.repeatPassword.trim()
    ) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (!signinData.email.trim()) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (!signinData.password.trim()) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (!signinData.repeatPassword.trim()) {
      inputs[2].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (signinData.password !== signinData.repeatPassword) {
      inputs[1].classList.add("error-form");
      inputs[2].classList.add("error-form");
      setErrorName("Пароли не совпадают");
    } else
      signupUser({
        email: signinData.email,
        password: signinData.password,
      }).catch((error) => {
        console.log(error.message);
        if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setErrorName("Слабый пароль");
          inputs[1]?.classList.add("error-form");
          inputs[2]?.classList.add("error-form");
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorName("Почта уже используется");
          inputs[0].classList.add("error-form");
        }
      });
  };

  return (
    <div className="popup-container">
      <div className="logo-container">
        <img src="/logo.png" alt="logo" />
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
        {errorName === "Слабый пароль" && (
          <div className="error-message">
            Пароль должен содержать минимум 6 символов.
          </div>
        )}
        {errorName === "Почта уже используется" && (
          <div className="error-message">
            Данная почта уже используется. Попробуйте войти.
          </div>
        )}

        <button
          onClick={handleRegister}
          className="btn-green w-[280px] mt-[24px]"
        >
          Зарегистироваться
        </button>
        {transitionFromMainPage ? (
          <button onClick={openPopLogin} className="btn-white">
            Войти
          </button>
        ) : (
          <Link to={appRoutes.LOGIN} className="btn-white">
            Войти
          </Link>
        )}
      </form>
    </div>
  );
}
