import { ChangeEvent, useEffect, useState } from "react";

// import { appRoutes } from "../../../route/appRoutes";

import "./WorkoutVideo.css";
import Header from "../Header/Header";
import { getWorkouts } from "../../firebase";
import handleInputChange from "../../utills/handleInputChange";

export default function WorkoutVideo() {
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  function togglePopUpExercises() {
    setIsOpened(!isOpened);
  }

  interface WorkoutData {
    _id: string;
    exercises: {
      name: string;
      quantity: string;
    };
    name: string;
    video: string;
  }

  const [workouts, setWorkouts] = useState<any>("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (err) {
        console.log("Failed to fetch workouts");
      }
    };

    fetchWorkouts();
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setLoginData, loginData);
  };

  const handleSubmit = () => {
    console.log("Данные");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[50px] ">
        <Header />
        <section className="workout">
          <div className="container">
            <div className="workout__info">
              <div className="workout__name">
                <p className="workout__name-title">Йога</p>
                <p className="workout__name-description">
                  Красота и здоровье / Йога на каждый день / 2 день
                </p>
              </div>
            </div>
            <div className="workout__video">
              {/* <iframe
                width="420"
                height="345"
                src={workouts["3yvozj"].video}
              ></iframe> */}
            </div>
            <div className="workout__list">
              <div className="workout__list-title">Упражнения тренировки 2</div>
              <div className="workout__list-items">
                <div className="workout__list-item1">
                  <div className="workout__item1">
                    <p className="workout__item-title1">Наклоны вперед 0%</p>
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

                  <div className="workout__item2">
                    <p className="workout__item-title2">Наклоны назад 0%</p>
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

                  <div className="workout__item3">
                    <p className="workout__item-title3">
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
                  <div className="workout__item1">
                    <p className="workout__item-title1">Наклоны вперед 0%</p>
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

                  <div className="workout__item2">
                    <p className="workout__item-title2">Наклоны назад 0%</p>
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

                  <div className="workout__item3">
                    <p className="workout__item-title3">
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
                  <div className="workout__item1">
                    <p className="workout__item-title1">Наклоны вперед 0%</p>
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

                  <div className="workout__item2">
                    <p className="workout__item-title2">Наклоны назад 0%</p>
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

                  <div className="workout__item3">
                    <p className="workout__item-title3">
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

              <button className="btn-progress" onClick={togglePopUpExercises}>
                Заполнить свой прогресс
              </button>

              {isOpened ? (
                <div className="popup-container">
                  <div>
                    <h2 className="flex text-3xl mb-12 text-left font-medium">
                      Мой прогресс
                    </h2>
                  </div>
                  <form className="form-container">
                    <input
                      type="number"
                      name="login"
                      placeholder="0"
                      className="text-area"
                      onChange={handleInput}
                      id="input1"
                    />
                    <button
                      className="btn-green w-[280px] mt-[24px] h-[52px] text-center leading-tight"
                      onClick={handleSubmit}
                    >
                      Сохранить
                    </button>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
