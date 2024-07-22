import { ChangeEvent, useEffect, useState } from "react";
import  Header from "../Header/Header";
import { getWorkouts } from "../../firebase";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import handleInputChange from "../../utills/handleInputChange";
// import { appRoutes } from "../../../route/appRoutes";

// {

// }: {
//   courseId: string
//   userId: string
//   workoutId: string
//   exercises: { [exerciseName: string]: number};
// }

export default function WorkoutVideo(

) {
  
const { userId } = useUser();
const { id } = useParams<{ id: string }>();

interface Exercise {
  quantity: number;
  name: string;
}

interface Workout {
  exercises: {
    [key: number]: Exercise;
  };
  name: string;
}

interface Workouts {
  [key: string]: Workout;
}

const [workouts, setWorkouts] = useState<Workouts | null>(null);

useEffect(() => {
  const loadWorkouts = async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
      console.log(data);
    } catch (err) {
      console.log('Failed to fetch workouts');
    }
  };

  loadWorkouts();
}, []);

function WorkoutListItems() {
  if (workouts === null || id === undefined || !workouts[id]) {
    return <p>Loading workouts...</p>;
  }

  return (
    <>
      {Object.keys(workouts[id].exercises).map(key => {
        const workoutItem = workouts[id].exercises[parseInt(key)];
        return (
          <div className="workout__item1 pb-[20px]" key={key}>
            <p className="workout__item-title1 pb-[10px]">{workoutItem.name}</p>
            <input 
              className="appearance-none w-full bg-transparent cursor-pointer" 
              type="range" 
              id="volume" 
              name="volume" 
              min="0" 
              max={workoutItem.quantity} 
            />
          </div>
        );
      })}
    </>
  );
}
  const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  function togglePopUp() {
    // Функция открытия модального окна
    setIsOpened(!isOpened);

  }

  const [loginData, setLoginData] = useState({ login: "", password: "" });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setLoginData, loginData);
  };

  const handleSubmit = () => {
    console.log("Данные");
  };

  if (workouts === null || id === undefined || !workouts[id]) {
    return <p>Loading workouts...</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      <Header/>
      <section className="workout w-[1440px] h-[1560px] pt-[145px] pb-[200px]">
        <div className="container max-w-[1160px] h-[1213px] mx-auto px-[140px]">
          <div className="workout__info pb-[40px]">
            <div className="workout__name w-[810px] h-[119px]">
              <p className="workout__name-title font-roboto font-medium text-[60px] leading-[100%] text-black pb-[24px]">Йога</p>
              <p className="workout__name-description font-roboto font-normal text-[32px] leading-[110%] underline text-black">
                {workouts[id].name}
              </p>
            </div>
          </div>
          <div className="w-[1160px] h-[639px] mb-[40px]">
            <iframe
              width="420"
              height="345"
              src={workouts[id].name}
            ></iframe>
          </div>
          <div className="workout__list rounded-[30px] p-[40px] w-[1160px] h-[375px] shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] bg-white pt-[40px]">
            <div className="workout__list-title font-sans font-normal text-[32px] leading-[110%] text-black pb-[20px]">Упражнения тренировки 2</div>
            <div className="workout__list-items font-roboto font-normal text-[18px] leading-[110%] text-black flex flex-row justify-between">
              <div className="workout__list-item1">
                {WorkoutListItems()}

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
              {/* <button onClick={} className="btn-green w-[280px] mt-[24px]">Заполнить свой прогресс</button> */}
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
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
