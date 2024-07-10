export default function Header() {
  return (
    <>
    <div className="flex flex-row">
      <div className="mt-[50px] ml-[140px] ">
        <img
          className=""
          src="/logo.png"
          alt="course_picture"
          width="220px"
          height="35px"
        />
        <p className="mt-[15px] w-[327px] text-lg text-[#7d7d7d]">
          Онлайн-тренировки для занятий дома
        </p>
        </div>
        <div className="ml-[730px] mt-[50px]">
          <div className="btn-green w-[103px] h-[52px] text-2xl py-2 px-4 font-semibold text-center">
            Войти
          </div>
      </div>
      </div>
    </>
  );
}
