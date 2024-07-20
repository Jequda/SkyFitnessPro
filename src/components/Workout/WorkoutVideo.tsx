import { useState } from "react";

// import { appRoutes } from "../../../route/appRoutes";

export default function WorkoutVideo() {
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    // Функция открытия модального окна
    setIsOpened(!isOpened);
  }
  return (
    // <header className="header">
    //   <div className="header__top">
    //     <div className="header__logo">
    //       <img
    //         src="../public/logo.png"
    //         alt="logo"
    //         className="header__logo-img"
    //       />
    //     </div>
    //     <nav className="header__nav">
    //       <div className="header__nav-name">
    //         <svg
    //           width="42"
    //           height="42"
    //           viewBox="0 0 42 42"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M41.8337 21C41.8337 32.5059 32.5063 41.8333 21.0003 41.8333C9.49439 41.8333 0.166992 32.5059 0.166992 21C0.166992 9.49403 9.49439 0.166626 21.0003 0.166626C32.5063 0.166626 41.8337 9.49403 41.8337 21ZM33.5003 28.4404C33.5003 31.8922 27.9039 35.5833 21.0003 35.5833C14.0968 35.5833 8.50033 31.8922 8.50033 28.4404C8.50033 24.9887 14.0968 23.0833 21.0003 23.0833C27.9039 23.0833 33.5003 24.9887 33.5003 28.4404ZM21.0003 18.9166C24.4521 18.9166 27.2503 16.1184 27.2503 12.6666C27.2503 9.21485 24.4521 6.41663 21.0003 6.41663C17.5485 6.41663 14.7503 9.21485 14.7503 12.6666C14.7503 16.1184 17.5485 18.9166 21.0003 18.9166Z"
    //             fill="#D9D9D9"
    //           />
    //         </svg>

    //         <div onClick={togglePopUp} className="header__user _hover02">
    //           Сергей
    //         </div>
    //         {isOpened && (
    //           <div
    //             className="header__pop-user-set pop-user-set"
    //             id="user-set-target"
    //           >
    //             <div className="pop-user-set">
    //               <p className="pop-user-set__name">Сергей</p>
    //               <p className="pop-user-set__mail">sergey.petrov96@mail.ru</p>
    //             </div>
    //             <button type="button" className="button__profile">
    //               <a href="">Мой профиль</a>
    //             </button>{" "}
    //             <br />
    //             <button type="button" className="button__exit">
    //               <a href="#popExit">Выйти</a>
    //             </button>
    //           </div>
    //         )}
    //         {/* </div> */}
    //         <svg
    //           width="14"
    //           height="9"
    //           viewBox="0 0 14 9"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
    //             stroke="black"
    //             strokeWidth="2"
    //           />
    //         </svg>
    //       </div>
    //     </nav>
    //   </div>
    // </header>

    <section className="workout w-[1440px] h-[1560px] pt-[145px] pb-[200px]">
      <div className="container max-w-[1160px] h-[1213px] mx-auto px-[140px]">
        <div className="workout__info pb-[40px]">
          <div className="workout__name w-[810px] h-[119px]">
            <p className="workout__name-title font-roboto font-medium text-[60px] leading-[100%] text-black pb-[24px]">Йога</p>
            <p className="workout__name-description font-roboto font-normal text-[32px] leading-[110%] underline text-black">
              Красота и здоровье / Йога на каждый день / 2 день
            </p>
          </div>
        </div>
        <div className="w-[1160px] h-[639px] mb-[40px]">
          <img src="../public/button and video.jpg" alt="workout yoga video" />
        </div>
        <div className="workout__list rounded-[30px] p-[40px] w-[1160px] h-[375px] shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] bg-white pt-[40px]">
          <div className="workout__list-title font-sans font-normal text-[32px] leading-[110%] text-black pb-[20px]">Упражнения тренировки 2</div>
          <div className="workout__list-items font-roboto font-normal text-[18px] leading-[110%] text-black flex flex-row justify-between">
            <div className="workout__list-item1">
              <div className="workout__item1 pb-[20px]">
                <p className="workout__item-title1 pb-[10px]">Наклоны вперед 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2 pb-[20px]">
                <p className="workout__item-title2 pb-[10px]">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3 pb-[20px]">
                <p className="workout__item-title3 pb-[10px]">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
            <div className="workout__list-item2">
              <div className="workout__item1 pb-[20px]">
                <p className="workout__item-title1 pb-[10px]">Наклоны вперед 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2 pb-[20px]">
                <p className="workout__item-title2 pb-[10px]">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3 pb-[20px]">
                <p className="workout__item-title3 pb-[10px]">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
            <div className="workout__list-item3">
              <div className="workout__item1 pb-[20px]">
                <p className="workout__item-title1 pb-[10px]">Наклоны вперед 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2 pb-[20px]">
                <p className="workout__item-title2 pb-[10px]">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3 pb-[20px]">
                <p className="workout__item-title3 pb-[10px]">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
          </div>
          <button type="button" className="workout__btn-progress pt-[40px]">
            <a className="btn-progress font-roboto font-normal text-[18px] leading-[110%] text-black rounded-[46px] px-[26px] py-[16px] w-[320px] h-[52px] bg-[#bcec30]" href="#">Заполнить свой прогресс</a>
            {/* <button onClick={} className="btn-progress">Заполнить свой прогресс</button> */}
          </button>
        </div>
      </div>
    </section>
  );
}
