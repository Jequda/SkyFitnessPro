import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PopLogin from "../popups/PopLogin/PopLogin";
import PopSignin from "../popups/PopSignin/PopSignin";
import { useCourses } from "../../hooks/useCourses";

import { useUser } from "../../contexts/UserContext";

export default function Main() {
  const {
    getCoursesList,
    cards,
    isLoading,
    getNotAddedCardsList,
    notAddedCards,
  } = useCourses();
  const { userId } = useUser();

  useEffect(() => {
    getCoursesList();
  }, []);

  useEffect(() => {
    getNotAddedCardsList();
  }, [cards, userId]);

  const [isOpenedPopLogin, setIsOpenedPopLogin] = useState<boolean>(false);
  const openPopLogin = () => {
    setIsOpenedPopLogin(!isOpenedPopLogin);
    setIsOpenedPopSignin(false);
  };
  const [isOpenedPopSignin, setIsOpenedPopSignin] = useState<boolean>(false);
  const openPopSignin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpenedPopSignin(!isOpenedPopSignin);
    setIsOpenedPopLogin(false);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] px-[140px] pb-[81px] font-roboto pt-[60px]">
      {(isOpenedPopLogin || isOpenedPopSignin) && (
        <div
          onClick={() => {
            setIsOpenedPopLogin(false), setIsOpenedPopSignin(false);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[3]"
        ></div>
      )}
      <div className="flex justify-center items-center gap-[20px]">
        <h1 className="text-6xl leading-[60px] font-medium">
          Начните заниматься спортом <br /> и улучшите качество жизни
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex bg-lime px-[16px] py-[20px] gap-[10px] text-[32px] leading-[35px] font-normal">
            Измени своё <br /> тело за полгода!
          </div>
          <svg
            className="absolute mt-[98px]"
            width="31"
            height="36"
            viewBox="0 0 31 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.31047 34.7255C1.70859 35.9972 -0.543649 34.3288 0.206143 32.4259L12.4832 1.26757C12.9654 0.043736 14.4775 -0.389332 15.5345 0.393651L29.4865 10.7288C30.5434 11.5118 30.5697 13.0844 29.5395 13.9023L3.31047 34.7255Z"
              fill="#BCEC30"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-[40px] flex-wrap justify-start max-w-[1160px] w-[100%]">
        {isLoading ? (
          <div className="flex gap-[10px] text-[32px] leading-[35px] font-normal">
            Загружаем курсы...
          </div>
        ) : userId ? (
          notAddedCards.length > 0 ? (
            notAddedCards?.map((card) => (
              <Card card={card} openPopLogin={openPopLogin} key={card._id} />
            ))
          ) : (
            <div className="flex gap-[10px] text-[32px] leading-[35px] font-normal">
              Вы добавили все курсы
            </div>
          )
        ) : (
          cards?.map((card) => (
            <Card card={card} openPopLogin={openPopLogin} key={card._id} />
          ))
        )}
      </div>
      <div
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="px-[26px] btn-green"
      >
        Наверх ↑
      </div>
      <div className="absolute z-[4]">
        {isOpenedPopLogin && (
          <PopLogin
            transitionFromMainPage={true}
            openPopSignin={openPopSignin}
          />
        )}
        {isOpenedPopSignin && (
          <PopSignin
            transitionFromMainPage={true}
            openPopLogin={openPopLogin}
          />
        )}
      </div>
    </div>
  );
}