import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";

interface PopLoginProps {
  transitionFromMainPage: boolean;
  openPopLogin: () => void;
  openPopSignin: () => void;
}

export default function PopLogin(props: PopLoginProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="flex items-center justify-center mb-[48px]">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="grid gap-y-[10px]">
          <input
            type="text"
            name="login"
            placeholder="Логин"
            className="text-area"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="text-area"
          />
          <button className="btn-green w-[280px] mt-[24px]">Войти</button>
          <Link to={appRoutes.SIGNIN} className="btn-white">
            Зарегистироваться
          </Link>
        </form>
      </div>
    </div>
  );
}
