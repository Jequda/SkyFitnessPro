// make a component for the progress of the workout

export default function WorkoutProgressCount() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="progress__count-container w-[426px] h-[595px] ">
          <section className="progress__count-title">Мой прогресс</section>
          <section className="progress__forms">
            <div className="count__forms">
              <form className="grid gap-y-[10px]">
                <input placeholder="0" className="leaningForward__text-area" />
                <input placeholder="0" className="leaningBack__text-area" />
                <input placeholder="0" className="liftingLegs__text-area" />
              </form>

              <button className="btn-green w-[280px] mt-[24px]">
                Зарегистироваться
              </button>
              {/* <Link to={appRoutes.LOGIN} className="btn-white">
              Войти
            </Link> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
