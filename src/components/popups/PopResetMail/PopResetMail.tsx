import { useEmail } from "../../../contexts/EmailContext";

export default function PopResetMail() {
  const { email } = useEmail();
  return (
    <div className="popup-container">
      <div className="logo-container">
        <img src="../public/logo.png" alt="logo" />
      </div>
      <p className="text-center whitespace-pre-line text-lg mr-[28px] ml-[30px] w-[360px]">
        Ссылка для востановления <br /> пароля отправлена <br /> на {email}
      </p>
    </div>
  );
}
