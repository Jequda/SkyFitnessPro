import "./WorkoutVideo.css";
import { useState } from "react";

export default function WorkoutVideo() {
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    // Функция открытия модального окна
    setIsOpened(!isOpened);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="block">
          <div className="header__top">
            <div className="header__logo">
              <img
                src="../public/logo.png"
                alt="logo"
                className="header__logo-img"
              />
            </div>
            <nav className="header__nav">
              <div className="header__nav-name">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.8337 21C41.8337 32.5059 32.5063 41.8333 21.0003 41.8333C9.49439 41.8333 0.166992 32.5059 0.166992 21C0.166992 9.49403 9.49439 0.166626 21.0003 0.166626C32.5063 0.166626 41.8337 9.49403 41.8337 21ZM33.5003 28.4404C33.5003 31.8922 27.9039 35.5833 21.0003 35.5833C14.0968 35.5833 8.50033 31.8922 8.50033 28.4404C8.50033 24.9887 14.0968 23.0833 21.0003 23.0833C27.9039 23.0833 33.5003 24.9887 33.5003 28.4404ZM21.0003 18.9166C24.4521 18.9166 27.2503 16.1184 27.2503 12.6666C27.2503 9.21485 24.4521 6.41663 21.0003 6.41663C17.5485 6.41663 14.7503 9.21485 14.7503 12.6666C14.7503 16.1184 17.5485 18.9166 21.0003 18.9166Z"
                    fill="#D9D9D9"
                  />
                </svg>

                <div onClick={togglePopUp} className="header__user _hover02">
                  Сергей
                </div>
                {/* <div className="wrapper"> */}
                  {isOpened && (
                    <div
                      className="header__pop-user-set pop-user-set"
                      id="user-set-target"
                    >
                      <div className="pop-user-set">
                        <p className="pop-user-set__name">Сергей</p>
                        <p className="pop-user-set__mail">sergey.petrov96@mail.ru</p>
                      </div>
                      <button type="button" className="button__profile">
                        <a href="#popExit">Мой профиль</a>
                      </button>{" "}
                      <br />
                      <button type="button" className="button__exit">
                        <a href="#popExit">Выйти</a>
                      </button>
                    </div>
                  )}
                {/* </div> */}
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3553 1.03308L6.67773 6.7107L1.00012 1.03308"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </nav>
          </div>

          <div className="workout">
            <div className="workout_card">
              <h1 className="workout_card-title">Йога</h1>
              <div className="workout_card-description">
                Красота и здоровье / Йога на каждый день / 2 день
              </div>
              <div className="workout_card-video">
                <img
                  src="../public/button and vidoe.jpg"
                  alt="workout yoga video"
                  // className="workout__yoga-img"
                />
              </div>
            </div>
          </div>
          <div className="workout__exercises">
            <div className="workout__exercises-description">
              Упражнения тренировки 2<div></div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}
