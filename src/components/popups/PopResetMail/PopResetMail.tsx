export default function PopResetMail() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="flex items-center justify-center mb-[48px]">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <p className="text-center whitespace-pre-line text-lg mr-[28px] ml-[30px]">
          Ссылка для востановления <br /> пароля отправлена <br /> на
          sergey.petrov96@mail.ru
        </p>
      </div>
    </div>
  );
}
