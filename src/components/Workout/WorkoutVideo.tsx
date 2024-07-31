import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  getWorkouts,
  getUser,
  updateUserWorkout,
  getCourses,
} from "../../firebase";
import { useUser } from "../../contexts/UserContext";
import { useParams } from "react-router-dom";
import { useCurrentCourse } from "../../contexts/CurrentCourseContext";

interface Exercise {
  quantity: number;
  name: string;
}

interface Workout {
  exercises: { [key: number]: Exercise };
  name: string;
  video: string;
}

interface Workouts {
  [key: string]: Workout;
}

interface UserWorkouts {
  workouts: { [key: string]: { exercises: [{ quantity: number }] } };
}
interface CoursesData {
  _id: string;
  complexity: number;
  description: string;
  directions: { [key: number]: string };
  duration: string;
  fitting: { [key: number]: string };
  nameEN: string;
  nameRU: string;
  order: number;
  users: { [key: string]: UserWorkouts };
  workoutTime: string;
  workouts: Workouts;
}
interface Courses {
  [key: string]: CoursesData;
}

export default function WorkoutVideo() {
  const { currentCourseId } = useCurrentCourse();
  const { userId } = useUser();
  const { id } = useParams<{ id: string }>();

  const [workouts, setWorkouts] = useState<Workouts | null>(null);
  const [courses, setCourses] = useState<Courses | null>(null);

  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const [userWorkouts, setUserWorkouts] = useState<UserWorkouts | null>(null);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const togglePopUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  const loadWorkouts = useCallback(async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch {
      console.log("Failed to fetch workouts");
    }
  }, []);

  const loadCourses = useCallback(async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } catch {
      console.log("Failed to fetch workouts");
    }
  }, []);

  const loadUserWorkouts = useCallback(async () => {
    if (!userId || !currentCourseId) return;
    try {
      const data = await getUser({ courseId: currentCourseId, userId });
      setUserWorkouts(data);
    } catch {
      console.log("Failed to fetch user workouts");
    }
  }, [userId, currentCourseId]);

  useEffect(() => {
    loadWorkouts();
  }, [loadWorkouts]);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  useEffect(() => {
    loadUserWorkouts();
  }, [loadUserWorkouts]);

  const updateProgressBar = (percent: number, index: number): string => {
    if (
      id === undefined ||
      userWorkouts?.workouts?.[id]?.exercises?.[index]?.quantity === undefined
    ) {
      return "0%";
    }
    const userExerciseData =
      userWorkouts.workouts[id].exercises[index].quantity;
    console.log(userExerciseData);

    if (userExerciseData === undefined) {
      return "0%";
    }
    console.log(`${(userExerciseData / percent) * 100}%`);

    return `${Math.floor((userExerciseData / percent) * 100)}%`;
  };

  const handleChange = (index: number, newQuantity: number) => {
    setExerciseData((prevExercises) => {
      const updatedExercises = [...prevExercises];
      if (!updatedExercises[index]) {
        updatedExercises[index] = { quantity: 0, name: "" };
      }
      updatedExercises[index].quantity = newQuantity;
      return updatedExercises;
    });
  };

  const handleSubmit = async () => {
    if (!id || !userId || !currentCourseId || !exerciseData.length) return;

    await updateUserWorkout({
      courseId: currentCourseId,
      userId,
      workoutId: id,
      exercises: exerciseData,
    });

    setExerciseData([]);
    await loadUserWorkouts();
  };

  const renderWorkoutItems = () => {
    if (id === undefined || !workouts?.[id]) {
      return <p>Loading workouts...</p>;
    }

    const items = Object.keys(workouts[id].exercises).map((key) => {
      const workoutItem = workouts[id].exercises[parseInt(key)];
      return (
        <div key={key} className="w-[320px]">
          <p className="text-lg break-words mb-[10px]">
            {workoutItem.name}&nbsp;
            {updateProgressBar(workoutItem.quantity, parseInt(key))}
          </p>
          <div className="h-1.5 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="bg-cyanProgress h-full transition-all duration-500 ease-out"
              style={{
                width: updateProgressBar(workoutItem.quantity, parseInt(key)),
              }}
            ></div>
          </div>
        </div>
      );
    });

    const columns = [];
    for (let i = 0; i < items.length; i += 3) {
      columns.push(
        <div key={i} className="flex flex-col space-y-[20px]">
          {items.slice(i, i + 3)}
        </div>
      );
    }

    return (
      <div className="grid grid-flow-col auto-cols-max gap-[60px]">
        {columns}
      </div>
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
              <h2 className="text-xl font-normal mb-1">
                {userWorkoutItem.name}
              </h2>
              <input
                type="number"
                name="quantity"
                placeholder="0"
                className="text-area"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, Number(e.target.value))
                }
                key={index}
              />
            </div>
          );
        })}
      </>
    );
  };

  if (
    id === undefined ||
    !workouts?.[id] ||
    currentCourseId === null ||
    !courses?.[currentCourseId]
  ) {
    return <p>Loading workouts...</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-[60px]">
      {isOpened && (
        <div
          onClick={() => {
            setIsOpened(false);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[3]"
        ></div>
      )}
      <Header />
      <section className="w-[1440px] h-[1560px] pb-[200px]">
        <div className="max-w-[1160px] h-[1213px] mx-auto">
          <div className="w-[810px] pb-[24px]">
            <p className="font-roboto font-medium text-[56px] leading-[100%] text-black ">
              {courses[currentCourseId].nameRU}
            </p>
          </div>
          <div className="font-roboto font-regular text-[32px] leading-[110%] underline text-black">
            {workouts[id].name}
          </div>
          <div className="w-[1160px] h-[639px] mb-[40px] mt-[40px]">
            <iframe
              className="rounded-3xl mt-[40px]"
              width="1160px"
              height="639px"
              src={workouts[id].video}
              title="Workout Video"
            ></iframe>
          </div>
          <div className="rounded-[30px] p-[40px] w-[1160px] h-auto shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] bg-white pt-[40px]">
            <div className="font-sans font-normal text-[32px] leading-[110%] text-black pb-[20px]">
              Упражнения тренировки
            </div>
            <div className="flex justify-start">{renderWorkoutItems()}</div>
            <button
              type="button"
              className="btn-green w-[320px] h-[52px] mt-[40px] text-center py-2"
              onClick={togglePopUp}
            >
              Обновить свой прогресс
            </button>
          </div>
        </div>
      </section>
      {isOpened && (
        <div className="popup-container">
          <div>
            <h2 className="flex text-3xl mb-12 text-left font-medium">
              Мой прогресс
            </h2>
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
    </div>
  );
}
