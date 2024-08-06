import { ChangeEvent, useEffect, useRef, useState } from "react";
import initializeRedBorder, { removeRedBorder } from "../../../utills/initializeRedBorder";
import handleInputChange from "../../../utills/handleInputChange";
import { updatePasswordUser, reauthenticateUser } from "../../../firebase";

type PopResetType = {
  onClose: () => void;
};

export default function PopReset({ onClose }: PopResetType) {
  const [resetData, setResetData] = useState({
    password: "",
    repeatPassword: "",
  });
  const [errorName, setErrorName] = useState("");
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    initializeRedBorder("input", removeRedBorder);
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setResetData, resetData);
  };

  useEffect(() => {
    if (!resetData.password.trim() && !resetData.repeatPassword.trim()) {
      setErrorName("");
    }
    if (resetData.password === resetData.repeatPassword) {
      [input1Ref.current, input2Ref.current].forEach((element) => {
        element?.classList.remove("error-form");
      });
    }
  }, [resetData]);

  const handleReset = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!resetData.password.trim() || !resetData.repeatPassword.trim()) {
      if (!resetData.password.trim()) {
        input1Ref.current?.classList.add("error-form");
      }
      if (!resetData.repeatPassword.trim()) {
        input2Ref.current?.classList.add("error-form");
      }
      setErrorName("Не введены данные");
    } else if (resetData.password !== resetData.repeatPassword) {
      [input1Ref.current, input2Ref.current].forEach((input) => {
        input?.classList.add("error-form");
      });
      setErrorName("Пароли не совпадают");
    } else {
      try {
        await updatePasswordUser({ password: resetData.password });
        await reauthenticateUser({ password: resetData.password });
        onClose();
      } catch (error) {
        console.error('Error updating password:', error);
      }
    }
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleClose}>
      <div
        className="popup-container"
        onClick={(event) => event.stopPropagation()}
      >
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
            ref={input1Ref}
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            className="text-area"
            onChange={handleInput}
            ref={input2Ref}
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