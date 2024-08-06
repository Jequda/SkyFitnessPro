import { useState } from "react";
import PopLogin from "../popups/PopLogin/PopLogin";
import PopUserMenu from "../popups/PopUserMenu/PopUserMenu";
import PopSignin from "../popups/PopSignin/PopSignin";
import { useUser } from "../../contexts/UserContext";

export default function Header() {
  const { user } = useUser();

  const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isSigninOpened, setIsSigninOpened] = useState(false);

  function openPopLogin() {
    setIsLoginOpened((prev) => !prev);
    if (isSigninOpened) {
      openPopSignin();
    }
  }

  function openPopSignin() {
    setIsSigninOpened((prev) => !prev);
    if (isLoginOpened) {
      openPopLogin();
    }
  }

  function toggleUserMenuPopup() {
    setIsUserMenuOpened((prev) => !prev);
  }

  return (
    <>
      {user ? (
        <div className="flex flex-row w-[1100px] mr-[40px] justify-between">
          <div className="mt-[50px]">
            <img
              className=""
              src="/logo.png"
              alt="course_picture"
              width="220px"
              height="35px"
            />
            <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
              Онлайн-тренировки для занятий дома
            </p>
          </div>
          <div className="mt-[50px] ">
            <div className="">
              <div
                onClick={toggleUserMenuPopup}
                className=" w-[168px] h-[50px] flex flex-row"
              >
                <img
                  className=""
                  src="/Profile.png"
                  alt="profile_picture"
                  width="50px"
                  height="50px"
                />
                <p className="text-lg/[26px] flex items-center pl-[15px] pr-[15px]">
                  {user.email}
                </p>
                <img
                  className=""
                  src="/Rectangle 3765.svg"
                  alt=""
                  width="8px"
                  height="8px"
                />
              </div>
            </div>
            {isUserMenuOpened && (
              <div className="" onClick={() => toggleUserMenuPopup()}>
                <div onClick={(e) => e.stopPropagation()}>
                  <PopUserMenu />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between">
          {(isLoginOpened || isSigninOpened) && (
            <div
              onClick={() => {
                setIsLoginOpened(false), setIsSigninOpened(false);
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-[3]"
            ></div>
          )}
          <div className="mt-[50px]">
            <img
              className=""
              src="/logo.png"
              alt="course_picture"
              width="220px"
              height="35px"
            />
            <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
              Онлайн-тренировки для занятий дома
            </p>
          </div>
          <div className="ml-[730px] mt-[50px]">
            <button
              onClick={openPopLogin}
              className="btn-green w-[103px] h-[52px] text-2xl py-2 px-4 font-semibold text-center"
            >
              Войти
            </button>
          </div>
          <div className="absolute z-[4] bg-white rounded-[30px] mt-[267px] ml-[540px]">
            {isLoginOpened && (
              <PopLogin
                transitionFromMainPage={true}
                openPopSignin={openPopSignin}
              />
            )}
            {isSigninOpened && (
              <PopSignin
                transitionFromMainPage={true}
                openPopLogin={openPopLogin}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
