interface PopResetProps {
  onClose: () => void;
}

export default function PopReset({ onClose }: PopResetProps) {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="popup-container">
        <div className="flex items-center justify-center mb-[48px]">
          <img src="../public/logo.png" alt="logo" />
        </div>
        <form className="grid gap-y-[10px]">
          <input
            type="password"
            name="password"
            placeholder="Новый пароль"
            className="text-area"
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            className="text-area"
          />
          <button className="btn-green w-[280px] mt-[24px]" onClick={handleClose} >Подтвердить</button>
        </form>
      </div>
    </div>
  );
}
