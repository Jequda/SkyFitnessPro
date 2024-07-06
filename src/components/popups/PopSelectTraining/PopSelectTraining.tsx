interface PopSelectTrainingProps {
  onClose: () => void;
}

export default function PopSelectTraining({ onClose }: PopSelectTrainingProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0" onClick={handleClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-[460px] h-[609px] rounded-[30px] border border-gray-300 bg-white p-[40px] z-index: 10" onClick={(event) => event.stopPropagation()}>
          <h2 className="text-2xl mb-6 text-center font-medium">Выберите тренировку</h2>
          <div className="w-[354px]">
            <ul className="h-full overflow-y-auto divide-y divide-gray-300">
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-done.svg" alt="done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Утренняя практика</h3>
                  <p className="text-base">Йога на каждый день / 1 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-done.svg" alt="done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Красота и здоровье</h3>
                  <p className="text-base">Йога на каждый день / 2 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Асаны стоя</h3>
                  <p className="text-base">Йога на каждый день / 3 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Растягиваем мышцы бедра</h3>
                  <p className="text-base">Йога на каждый день / 4 день</p>
                </div>
              </li>
              <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                <img src="icon-not-done.svg" alt="not done" className="mr-3" />
                <div>
                  <h3 className="text-xl font-normal mb-1">Гибкость спины</h3>
                  <p className="text-base">Йога на каждый день / 5 день</p>
                </div>
              </li>
            </ul>
            <button className="btn-green w-[380px] mt-[34px]">
              Начать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
