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

// function WorkoutListItems() {

//   for (let workoutItem in workouts?.exercises) {

//     return (
//       <div className="workout__item1 pb-[20px]">
//         <p className="workout__item-title1 pb-[10px]">{workoutItem.name}</p>
//         <input 
//           className="appearance-none w-full bg-transparent cursor-pointer" 
//           type="range" 
//           id="volume" 
//           name="volume" 
//           min="0" 
//           max={workoutItem.quantity} 
//         />
//       </div>
//     );
//   };
// };
function WorkoutListItems() {
  return (
    <>
      {Object.keys(workouts.exercises).map(key => {
        const workoutItem = workouts.exercises[parseInt(key)];
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