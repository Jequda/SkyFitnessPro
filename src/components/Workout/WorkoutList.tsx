import { useEffect, useState } from "react";
import { getWorkouts } from "../../firebase";
import { WorkoutType } from "../../types";

export default function WorkoutList({workoutId}:{workoutId: string }) {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutType | null>(
    null
  );
  useEffect(() => {
    getWorkouts()
      .then((workouts) => {
        const workoutsData = Object.keys(workouts).map((id) => workouts[id]);
        const workout = workoutsData.find(
          (workout) => workout._id === workoutId
        );
        setCurrentWorkout(workout);
      })
      .catch((error) => {
        alert(error);
      });
  }, [workoutId]);
  console.log(workoutId);
  return (
    <div className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
      <img src="icon-done.svg" alt="done" className="mr-3" />
      <div>
        <h3 className="text-xl font-normal mb-1">{currentWorkout?.name}</h3>
        {/* <p className="text-base">Йога на каждый день / 1 день</p> */}
      </div>
    </div>
  );
}
