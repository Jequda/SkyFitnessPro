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
  const [, setWorkouts] = useState();

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

  return (
    <div className="fixed inset-0" onClick={handleClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div
          className="w-[380px] max-h-[500px] rounded-[30px] border border-gray-300 bg-white p-8"
          onClick={(event) => event.stopPropagation()}
        >
          <h2 className="text-2xl mb-6 text-center font-medium">
            Выберите тренировку
          </h2>
          <div className="w-full max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            {currentCourse?.workouts.map((workoutId, index) => (
              <Link key={index} to={`/training/${workoutId}`}>
                <div className="py-2 border-b border-black-300 text-lg text-gray-800 text-center">
                  <WorkoutList workoutId={workoutId} />
                </div>
              </Link>
            ))}
          </div>
          <button className="btn-green h-[52px] w-full mt-3">Начать</button>
        </div>
      </div>
    </div>
  );
}
