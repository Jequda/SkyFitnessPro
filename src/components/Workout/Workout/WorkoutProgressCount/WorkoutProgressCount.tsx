// import { useState } from "react";

// make a component for the progress of the workout

export default function WorkoutProgressCount() {
//     const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
//   function togglePopUp() {
//     // Функция открытия модального окна
//     setIsOpened(!isOpened);
//   }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="progress__count-container w-[426px] h-[595px] rounded-[30px]
p-[40px] bg-white">
          <section className="progress__count-title font-normal text-[32px] leading-[110%] text-black  text-center flex-none order-0 flex-grow-0 mb-[48px] ">
            Мой прогресс
          </section>
          <section className="progress__forms">
            <div className="count__forms">
              <form className="grid gap-y-[10px]">
                <input placeholder="0" className="leaningForward__text-area" />
                <input placeholder="0" className="leaningBack__text-area" />
                <input placeholder="0" className="liftingLegs__text-area" />
              </form>
              <div className="scrollBar">
                <div className="full::-webkit-scrollbar @apply w-2.5 bg-[#f9f9fd]"></div>
                <div className="element::-webkit-scrollbar-thumb @apply bg-[#18aaaa] rounded-[10px]"></div>
                <div className="element::-webkit-scrollbar-track @apply bg-[#f9f9fd] rounded-[10px]-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2)"></div>
              </div>
              <button className="save-btn w-[280px] mt-[24px]">
                Сохранить
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
