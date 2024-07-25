import { ChangeEvent, useCallback, useEffect, useState } from "react";
import  Header from "../Header/Header";
import { getWorkouts, getUser, updateUserWorkout } from "../../firebase";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { useCurrentCourse } from "../../contexts/CurrentCourseContext";

interface Exercise {
  exercises: number;
  quantity: number;
  name: string;
}

interface Workout {
  quantity: number;
  exercises: { [key: number]: Exercise };
  name: string;
  video: string;
  userId: string;
  id: { [key: number]: number };
}

interface Workouts {
  [key: string]: Workout;
}

interface UserWorkouts {
  workouts: { [key: string]: number[] };
}

const generateRandomId = (length: number = 6): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

export default function WorkoutVideo() {
  const { currentCourseId } = useCurrentCourse();
  const { userId } = useUser();
  const { id } = useParams<{ id: string }>();
  console.log(id);
  console.log(userId);
  console.log(currentCourseId);

  const [workouts, setWorkouts] = useState<Workouts | null>(null);
  const [exerciseData, setExerciseData] = useState<Workout[]>([]);
  const [userWorkouts, setUserWorkouts] = useState<UserWorkouts | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const togglePopUp = () => setIsOpened(!isOpened);

  const loadWorkouts = useCallback(async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
      console.log(data);
    } catch {
      console.log('Failed to fetch workouts');
    }
  }, []);

  const loadUserWorkouts = useCallback(async () => {
    if (!userId || !currentCourseId) return;
    try {
      const data = await getUser({ courseId: currentCourseId, userId });
      setUserWorkouts(data);
      console.log(data);
    } catch {
      console.log('Failed to fetch user workouts');
    }
  }, [userId, currentCourseId]);

  useEffect(() => {
    loadWorkouts();
  }, [loadWorkouts]);

  useEffect(() => {
    loadUserWorkouts();
  }, [loadUserWorkouts]);

  const updateProgressBar = (percent: number, index: number): string => {
    console.log('userWorkouts:', userWorkouts);
    console.log('index:', index);
    console.log('id:', id);

    if (id === undefined || !userWorkouts || !userWorkouts.workouts[id] || userWorkouts.workouts[id][index] == null) {
      if (id === undefined || !userWorkouts) {
        console.log("Вообще конец", userWorkouts);
        return "0%";
      }
      console.log("Конец", userWorkouts.workouts[id]?.[index]);
      return "0%";
    }
    console.log('percent:', percent);
    console.log('userWorkouts.workouts[id][index]:', userWorkouts.workouts[id][index]);
    console.log(`${(percent / userWorkouts.workouts[id][index]) * 100}%`);

    return `${(userWorkouts.workouts[id][index] / percent) * 100}%`;
  };

  const handleChange = (index: number, newQuantity: number) => {
    setExerciseData(prevExercises => {
      const updatedExercises = [...prevExercises];
      updatedExercises[index] = { ...updatedExercises[index], quantity: newQuantity };
      return updatedExercises;
    });
  };

  const handleSubmit = () => {
    if (!id || !userId || !currentCourseId || !exerciseData) return;
    updateUserWorkout({ courseId: currentCourseId, userId, workoutId: id, exercises: exerciseData });
  };

  const renderWorkoutItems = () => {
    if (id === undefined || !workouts?.[id]) {
      return <p>Loading workouts...</p>;
    }

    return (
      <>
        {Object.keys(workouts[id].exercises).map((key, index) => {
          const workoutItem = workouts[id].exercises[parseInt(key)];
          return (
            <div className="pb-[20px]" key={key}>
              <p className="pb-[10px]">{workoutItem.name}</p>
              <div className="w-[320px] h-[6px] bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-500 ease-out" style={{ width: updateProgressBar(workoutItem.quantity, index) }}></div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const renderUserProgressWorkouts = () => {
    if (id === undefined || !workouts?.[id]) {
      return <p>Loading workouts...</p>;
    }

    return (
      <>
        {Object.keys(workouts[id].exercises).map((key, index) => {
          const userWorkoutItem = workouts[id].exercises[parseInt(key)];
          return (
            <div className="pb-[20px]" key={key}>
              <h2 className="text-xl font-normal mb-1">{userWorkoutItem.name}</h2>
              <input
                type="number"
                name="quantity"
                placeholder="0"
                className="text-area"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, Number(e.target.value))}
                key={index}
              />
            </div>
          );
        })}
      </>
    );
  };

  if (id === undefined || !workouts?.[id]) {
    return <p>Loading workouts...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[60px]">
      <Header />
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
              title="Workout Video"
            ></iframe>
          </div>
          <div className="rounded-[30px] p-[40px] w-[1160px] h-[375px] shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] bg-white pt-[40px]">
            <div className="font-sans font-normal text-[32px] leading-[110%] text-black pb-[20px]">Упражнения тренировки 2</div>
            <div className="font-roboto font-normal text-[18px] leading-[110%] text-black flex flex-row justify-between">
              <div>
                {renderWorkoutItems()}
              </div>
            </div>
            <button type="button" className="pt-[40px]" onClick={togglePopUp}>
              <span className="btn-green w-[280px] mt-[24px]">Заполнить свой прогресс</span>
              {isOpened && (
                <div className="popup-container">
                  <div>
                    <h2 className="flex text-3xl mb-12 text-left font-medium">Мой прогресс</h2>
                  </div>
                  <form className="form-container">
                    {renderUserProgressWorkouts()}
                    <button
                      type="button"
                      className="btn-green w-[280px] mt-[24px] h-[52px] text-center leading-tight"
                      onClick={handleSubmit}
                    >
                      Сохранить
                    </button>
                  </form>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}