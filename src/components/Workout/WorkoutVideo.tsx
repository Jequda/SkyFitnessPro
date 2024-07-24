import { ChangeEvent, useEffect, useState } from "react";
import  Header from "../Header/Header";
import { getUser, getWorkouts } from "../../firebase";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import handleInputChange from "../../utills/handleInputChange";
// import { appRoutes } from "../../../route/appRoutes";

export default function WorkoutVideo() {

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
    video: string;
    userId: string
  }
  
  interface Workouts {
    [key: string]: Workout;
  }
  
const generateRandomId = (length: number = 6): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
    

const [workouts, setWorkouts] = useState<Workouts | null>(null);
const [userWorkouts, setUserWorkouts] = useState<Workouts | null>(null);

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


useEffect(() => {
  const loadWorkouts = async () => {
    try {
      if (userId === null || courseId === null) {
        return <p>Loading workouts...</p>;
      }
      const data = await getUser({courseId, userId});
      setUserWorkouts(data);
      console.log(data);
    } catch (err) {
      console.log('Failed to fetch workouts');
    }
  };

  loadWorkouts();
}, []);

function updateProgressBar(percent: number) {
  const progressBar = percent + '%';
  return progressBar
}

function WorkoutListItems() {
  if (workouts === null || id === undefined || !workouts[id]) {
    return <p>Loading workouts...</p>;
  }

  return (
    <>
      {Object.keys(workouts[id].exercises).map(key => {
        const workoutItem = workouts[id].exercises[parseInt(key)];
        return (
          <div className="pb-[20px]" key={key}>
            <p className="pb-[10px]">{workoutItem.name}</p>
            <div className="w-[320px] h-[6px] bg-gray-300 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full transition-all duration-500 ease-out" id="progress-bar" style={{ width: updateProgressBar(33) }}></div>
            </div>
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
    console.log(loginData);
  };

  if (workouts === null || id === undefined || !workouts[id]) {
    return <p>Loading workouts...</p>;
  }

  function userProgressWorkouts() {


    if (workouts === null || id === undefined || !workouts[id]) {
      return <p>Loading workouts...</p>;
    }
  
    return (
      <>
        {Object.keys(workouts[id].exercises).map(key => {
          const userWorkoutItem = workouts[id].exercises[parseInt(key)];
          return (
            <>
              <div className="pb-[20px]" key={key}>
                <h2 className="text-xl font-normal mb-1">{userWorkoutItem.name}</h2>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  className="text-area"
                  onChange={handleInput}
                  id={"input"}
                  key={generateRandomId()}
                />
              </div>
            </>
          );
        })}
      </>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center gap-[60px]">
      <Header/>
      <section className="w-[1440px] h-[1560px] pb-[200px]">
        <div className="max-w-[1160px] h-[1213px] mx-auto">
          <div className="pb-[40px]">
            <div className="w-[810px] h-[119px]">
              <p className="font-roboto font-medium text-[56px] leading-[100%] text-black pb-[24px]">Йога</p>
              <p className="font-roboto font-regular text-[32px] leading-[110%] underline text-black">
                {workouts[id].name}
              </p>
            </div>
          </div>
          <div className="w-[1160px] h-[639px] mb-[40px]">
            <iframe
              className="rounded-3xl mt-[40px]"
              width="1160px"
              height="639px"
              src={workouts[id].video}
            ></iframe>
          </div>
          <div className="rounded-[30px] p-[40px] w-[1160px] h-[375px] shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] bg-white pt-[40px]">
            <div className="font-sans font-normal text-[32px] leading-[110%] text-black pb-[20px]">Упражнения тренировки 2</div>
            <div className="font-roboto font-normal text-[18px] leading-[110%] text-black flex flex-row justify-between">
              <div>

                {WorkoutListItems()}

              </div>
            </div>
            <button type="button" className="pt-[40px]">
              <button onClick={togglePopUp} className="btn-green w-[280px] mt-[24px]">Заполнить свой прогресс</button>
              {isOpened ? (

                <div className="popup-container">
                  <div>
                    <h2 className="flex text-3xl mb-12 text-left font-medium">
                      Мой прогресс
                    </h2>
                  </div>
                  <form className="form-container">
                    {userProgressWorkouts()}
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
