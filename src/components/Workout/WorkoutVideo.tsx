import "./WorkoutVideo.css";
// import Header from "../Header/Header";

export default function WorkoutVideo() {
  // const [isOpened, setIsOpened] = useState(false); // Состояние открытия модального окна
  // function togglePopUp() {
  //   // Функция открытия модального окна
  //   setIsOpened(!isOpened);
  // }
  return (
    <>
        {/* <Header /> */}

    <section className="workout">
      <div className="container mx-auto px-[140px] pt-[145px] pb-[200px]">
        <div className="workout__info ">
          <div className="workout__name w-[810px] ">
            <p className="workout__name-title mb-[24px] font-medium text-6xl ">
              Йога
            </p>
            <p className="workout__name-description mb-[40px] text-[32px] leading-[110%] underline text-black; ">
              Красота и здоровье / Йога на каждый день / 2 день
            </p>
          </div>
        </div>
        <div className="workout__video mb-[40px]  ">
          <img src="../public/button and video.jpg" alt="workout yoga video" />
        </div>
        <div className="workout__list shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] p-10 rounded-3xl ;">
          
          <div className="workout__list-title font-roboto  @apply w-[403px] font-normal text-[32px] leading-[110%] text-black pb-[20px] ;">Упражнения тренировки 2</div>
          
          <div className="workout__list-items @apply grid gap-x-2 gap-y-3 grid-cols-3 w-[1080px] leading-[110%] text-black; ">
            
            <div className="workout__list-item1 w-[320px]">
              <div className="workout__item1 ">
                <p className="workout__item-title1 ">Наклоны вперед 0%</p>
                
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2">
                <p className="workout__item-title2">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3">
                <p className="workout__item-title3">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
            <div className="workout__list-item2">
              <div className="workout__item1">
                <p className="workout__item-title1">Наклоны вперед 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2">
                <p className="workout__item-title2">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3">
                <p className="workout__item-title3">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
            <div className="workout__list-item3">
              <div className="workout__item1">
                <p className="workout__item-title1">Наклоны вперед 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item2">
                <p className="workout__item-title2">Наклоны назад 0%</p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>

              <div className="workout__item3">
                <p className="workout__item-title3">
                  Поднятие ног, согнутых в коленях 0%
                </p>
                <svg
                  className="workout__item-svg"
                  width="320"
                  height="6"
                  viewBox="0 0 320 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="320" height="6" rx="3" fill="#F7F7F7" />
                </svg>
              </div>
            </div>
          </div>
          <button type="button" className="workout__btn-progress">
            <a className="btn-progress" href="#">
              Заполнить свой прогресс
            </a>
            {/* <button onClick={} className="btn-progress">Заполнить свой прогресс</button> */}
          </button>
        </div>
      </div>
    </section>
  </>
  );
}
