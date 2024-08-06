export type CourseType = {
    description: string,
    directions: string[],
    fitting: string[],
    nameEN: string,
    nameRU: string,
    order: number,
    workouts: string[],
    _id: string,
    duration: string,
    workoutTime: string,
    complexity: number,
    users: string[]
}

export type WorkoutType = {
    name: string;
    progress: number;
    id: string;
  };
