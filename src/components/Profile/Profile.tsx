import { useState, useEffect } from "react";
import { appRoutes } from "../../../src/route/appRoutes";
import Card from "../Card/Card";
import PopReset from "../popups/PopReset/PopReset";
import Header from "../Header/Header";
import PopSelectTraining from "../popups/PopSelectTraining/PopSelectTraining";
import { Link } from "react-router-dom";
import { useCourses } from "../../hooks/useCourses";
import { useUser } from "../../contexts/UserContext";

export default function Profile() {
  const [showPopReset, setShowPopReset] = useState(false);
  const [showPopSelectTraining, setShowPopSelectTraining] = useState(false);
  const { userId } = useUser();
  const { cards, getCoursesList, isLoading } = useCourses();

  useEffect(() => {
    if (userId) {
      getCoursesList();
    }
  }, [userId, getCoursesList]);

  const addedCourses = cards.filter(course => {
    return userId && course.users && Object.keys(course.users).includes(userId);
  });

  const handleOpenPopReset = () => {
    setShowPopReset(true);
  };

  const handleClosePopReset = () => {
    setShowPopReset(false);
  };

  const handleOpenPopSelectTraining = () => {
    setShowPopSelectTraining(true);
  };

  const handleClosePopSelectTraining = () => {
    setShowPopSelectTraining(false);
  };

  return (
    <div className="flex flex-col items-center font-roboto">
      {showPopReset && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleClosePopReset}
        ></div>
      )}
      <Header />
      <div className="flex flex-col font-roboto pt-[60px]">
        <h1 className="text-[40px] leading-[35px] font-medium mb-[40px]">
          Профиль
        </h1>
        <div className="flex items-center w-[1160px] h-[257px] bg-white rounded-[30px] shadow-lg mb-[60px]">
          <div className="w-[197px] h-[197px] bg-gray-300 rounded-[30px] m-[30px]">
            <img src="avatar.svg" alt="avatar" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-[32px] mb-[30px] font-medium">Сергей</h2>
            <p className="text-[18px] mb-[30px]">Логин: sergey.petrov96</p>
            <div className="flex">
              <button
                className="btn-green w-[192px] mr-[10px]"
                onClick={handleOpenPopReset}
              >
                Изменить пароль
              </button>
              <Link to={appRoutes.MAIN} className="btn-white w-[192px]">
                Выйти
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pb-[81px] font-roboto w-full max-w-[1160px]">
        <h1 className="text-[40px] leading-[35px] font-medium mb-[40px]">
          Мои курсы
        </h1>
        <div className="flex gap-[40px] flex-wrap max-w-[1160px]">
          {isLoading ? (
            <div className="flex gap-[10px] text-[32px] leading-[35px] font-normal">
              Загружаем курсы...
            </div>
          ) : addedCourses.length > 0 ? (
            addedCourses.map((card) => (
              <Card
                key={card._id}
                card={card}
                openPopLogin={() => { }}
                isProfilePage={true}
                handleOpenPopSelectTraining={handleOpenPopSelectTraining}
              />
            ))
          ) : (
            <div className="flex gap-[10px] text-[32px] leading-[35px] font-normal">
              У вас нет добавленных курсов
            </div>
          )}
        </div>
      </div>
      {showPopReset && <PopReset onClose={handleClosePopReset} />}
      {showPopSelectTraining && (
        <PopSelectTraining onClose={handleClosePopSelectTraining} />
      )}
    </div>
  );
}
