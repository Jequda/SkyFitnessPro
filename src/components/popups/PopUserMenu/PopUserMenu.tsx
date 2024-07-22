import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../route/appRoutes";
import { useUser } from "../../../contexts/UserContext";

export default function PopUserMenu() {
  const { logout, user } = useUser();
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    logout();
    navigate(appRoutes.MAIN);
  };
  return (
    <div className="absolute ml-[232px] inset-0 z-50 mt-[120px]">
      <div className="bg-white rounded-[30px] shadow-[0px_4px_67px_-12px_rgba(0,0,0,0.13)] ml-[1034px] w-[266px] h-[258px]">
        <div className="flex flex-col justify-center items-center pt-[30px]">
          <p className="text-center text-xl">{user?.email}</p>
          <p className="text-center text-xl text-[#999999] mt-[10px]">
            {user?.email}
          </p>
          <div className="pt-[34px]">
            <Link to={appRoutes.PROFILE}>
              <button className="btn-green w-[206px] h-[52px]">
                Мой профиль
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="btn-white w-[206px] h-[52px] mt-[10px] "
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
