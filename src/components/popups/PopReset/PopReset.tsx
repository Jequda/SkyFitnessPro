import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";

export default function PopReset() {
  const [resetData, setResetData] = useState({
    password: "",
    repeatPassword: "",
  });
  const inputs = document.querySelectorAll("input");
  const [errorName, setErrorName] = useState("");

  initializeRedBorder("input", removeRedBorder);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setResetData, resetData);
  };

  useEffect(() => {
    if (
      resetData.password.length !== 0 &&
      resetData.repeatPassword.length !== 0
    ) {
      setErrorName("");
    }
    if (resetData.password === resetData.repeatPassword) {
      inputs.forEach((element) => {
        element.classList.remove("error-form");
      });
    }
  }, [resetData]);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      resetData.password.length === 0 &&
      resetData.repeatPassword.length === 0
    ) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (resetData.password.length === 0) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (resetData.repeatPassword.length === 0) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (resetData.password !== resetData.repeatPassword) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Пароли не совпадают");
    } else
      alert(`Пароль: ${resetData.password} 
Повтор пароля: ${resetData.repeatPassword}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="logo-container">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="form-container">
          <input
            type="password"
            name="password"
            placeholder="Новый пароль"
            className="text-area"
            onChange={handleInput}
            id="input1"
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            className="text-area"
            onChange={handleInput}
            id="input2"
          />
          {errorName === "Не введены данные" && (
            <div className="error-message">Не все поля заполнены</div>
          )}
          {errorName === "Пароли не совпадают" && (
            <div className="error-message">Пароли не совпадают</div>
          )}
          <button
            className="btn-green w-[280px] mt-[24px]"
            onClick={handleReset}
          >
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  );
}
