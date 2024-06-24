export default function PopLogin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="flex items-center justify-center mb-[48px]">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="grid gap-y-[10px]">
          <input
            type={"text"}
            name={"email"}
            placeholder={"Логин"}
            className="text-area"
          />
          <input
            type={"password"}
            name={"password"}
            placeholder={"Пароль"}
            className="text-area"
          />
          <button className="btn-green w-[280px] h-[52px] mt-[24px]">
            Войти
          </button>
          <button className="btn-white">Зарегистироваться</button>
        </form>
      </div>
    </div>
  );
}
