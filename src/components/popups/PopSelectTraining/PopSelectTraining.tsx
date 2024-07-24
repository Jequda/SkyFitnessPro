import { useEffect, useState } from "react";
import { getCourses, getWorkouts } from "../../../firebase";
import WorkoutList from "../../Workout/WorkoutList";
import { CourseType } from "../../../types";
import { Link } from "react-router-dom";

type PopSelectTrainingType = {
  onClose: () => void;
  courseId: string | null;
};

export default function PopSelectTraining({
  onClose,
  courseId,
}: PopSelectTrainingType) {
  const [currentCourse, setCurrentCourse] = useState<CourseType | null>(null);
  const handleClose = () => {
    onClose();
  };
  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const result = await getWorkouts();
        setWorkouts(result);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };
    checkFavoriteStatus();
  }, []);

  useEffect(() => {
    getCourses()
      .then((courses) => {
        const coursesData = Object.keys(courses).map((id) => courses[id]);
        const course = coursesData.find((course) => course._id === courseId);
        setCurrentCourse(course);
      })
      .catch((error) => {
        alert(error);
      });
  }, [courseId]);
  console.log(currentCourse?.workouts);

  return (
    <div className="fixed inset-0" onClick={handleClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div
          className="w-[460px] h-[609px] rounded-[30px] border border-gray-300 bg-white p-[40px] z-index: 10"
          onClick={(event) => event.stopPropagation()}
        >
          <h2 className="text-2xl mb-6 text-center font-medium">
            Выберите тренировку
          </h2>
          <div className="w-[354px]">
            <div className="h-full overflow-y-auto divide-y divide-gray-300">
              {currentCourse?.workouts.map(( workoutId, index) => (
                <Link to={`/training/${workoutId}`}>
                <WorkoutList key={index} workoutId={workoutId} />
                </Link>
              ))}
              {/* <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-done.svg" alt="done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">
                    Красота и здоровье
                  </h3>
                  <p className="text-base">Йога на каждый день / 2 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Асаны стоя</h3>
                  <p className="text-base">Йога на каждый день / 3 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">
                    Растягиваем мышцы бедра
                  </h3>
                  <p className="text-base">Йога на каждый день / 4 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Гибкость спины</h3>
                  <p className="text-base">Йога на каждый день / 5 день</p>
                </div>
              </li> */}
            </div>
            <button className="btn-green w-[380px] mt-[34px]">Начать</button>
          </div>
        </div>
      </div>
    </div>
  );
}
