import { Link } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";

export default function PopSignin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="flex items-center justify-center mb-[48px]">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="grid gap-y-[10px]">
          <input
            type="email"
            name="email"
            placeholder="Эл. почта"
            className="text-area"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className="text-area"
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            className="text-area"
          />
          <button className="btn-green w-[280px] mt-[24px]">
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
