interface Exercise {
  quantity: number;
  name: string;
}

interface Workouts {
  exercises: {
    [key: number]: Exercise;
  };
  name: string;
}

const workouts: Workouts = {
  exercises: {
    0: {
      quantity: 10,
      name: "stiven",
    },
    1: {
      quantity: 38,
      name: "Tiv",
    },
    2: {
      quantity: 17,
      name: "Nensy",
    },
  },
  name: "Dyy",
};
