import { ChangeEvent, useEffect, useState } from "react";
import initializeRedBorder, {
  addRedBorder,
  removeRedBorder,
} from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";
import { updatePasswordUser } from "../../../firebase";

type PopResetType = {
  onClose: () => void;
}

export default function PopReset({ onClose }: PopResetType) {
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
    if (!resetData.password.trim() && !resetData.repeatPassword.trim()) {
      setErrorName("");
    }
    if (!resetData.password.trim() === !resetData.repeatPassword.trim()) {
      inputs.forEach((element) => {
        element.classList.remove("error-form");
      });
    }
  }, [resetData]);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!resetData.password.trim() && !resetData.repeatPassword.trim()) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Не введены данные");
    } else if (!resetData.password.trim()) {
      inputs[0].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (!resetData.repeatPassword.trim()) {
      inputs[1].classList.add("error-form");
      setErrorName("Не введены данные");
    } else if (
      !resetData.password.trim() !== !resetData.repeatPassword.trim()
    ) {
      inputs.forEach((input) => {
        addRedBorder(input as HTMLInputElement);
      });
      setErrorName("Пароли не совпадают");
    } else updatePasswordUser({ password: resetData.password });
    onClose();
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleClose}>
      <div className="popup-container" onClick={(event) => event.stopPropagation()}>
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
          <button className="btn-green w-[280px] mt-[24px]" onClick={handleReset}>
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  );
}
