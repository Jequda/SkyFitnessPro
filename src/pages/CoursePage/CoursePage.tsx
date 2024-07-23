import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Fitting from "../../components/Course/Fitting";
import Directions from "../../components/Course/Directions";
import { useUser } from "../../contexts/UserContext";
import PopLogin from "../../components/popups/PopLogin/PopLogin";
import PopSignin from "../../components/popups/PopSignin/PopSignin";
import { addFavoriteCourse, getCourses } from "../../firebase";
import { CourseType } from "../../types";
import { useCourses } from "../../hooks/useCourses";

export default function CoursePage() {
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isSigninOpened, setIsSigninOpened] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseType | null>(null);
  const { getNotAddedCardsList } = useCourses();

  const { userId } = useUser();
  const { id } = useParams();
  const courseId = id;

  useEffect(() => {
    // Загрузка данных из базы данных при первом рендере
    getCourses()
      .then((courses) => {
        const coursesData = Object.keys(courses).map((id) => courses[id]);
        const course = coursesData.find((course) => course._id === courseId);
        setCurrentCourse(course);
      })
      .catch((error) => {
        alert(error);
      });
  }, [courseId]);

  function openPopLogin() {
    setIsLoginOpened((prev) => !prev);
    if (isSigninOpened) {
      openPopSignin();
    }
  }

  function openPopSignin() {
    setIsSigninOpened((prev) => !prev);
    if (isLoginOpened) {
      openPopLogin();
    }
  }

  const imagePath = "../coursesImages/" + courseId + ".png";

  if (!currentCourse) {
    return <div>Loading...</div>;
  }

  const handleAddFavoriteCourse = async (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();
    if (userId && courseId) {
      try {
        await addFavoriteCourse({ courseId, userId }).then(() => {
          getNotAddedCardsList();
        });
      } catch (error) {
        alert("ошибка");
      }
    } else console.log(userId);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[50px] ">
        <Header />

        <div className="">
          <div className="relative w-[1160px] h-[310px] rounded-[20px] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src={imagePath}
              alt="course_picture"
              width="1160px"
              height="310px"
            />
            <div className="">
              <div className="absolute mt-[40px] ml-[40px] top-[10px] left-[10px] transform -translate-x-[10px] -translate-y-[10px] text-white text-6xl font-medium leading-16">
                {currentCourse?.nameRU}
              </div>
            </div>
          </div>
          <div className="pt-[60px] gap-x-[3.75rem]">
            <p className="text-4xl font-bold pb-[40px]">
              Подойдет для вас, если:
            </p>
            <div className="w-[1160px] flex justify-between flex-row flex-wrap ">
              {currentCourse?.fitting.map((text, index) => (
                <Fitting key={index} text={text} i={index} />
              ))}
            </div>

            <div className="">
              <h1 className="pt-[60px] text-4xl font-bold mb-[40px]">
                Направления
              </h1>
              <div className="flex flex-row bg-[#BCEC30] w-[1160px] h-[146px] rounded-[20px] ">
                <div className="flex flex-wrap justify-between gap-8 pl-[30px]">
                  {currentCourse?.directions.map((text, index) => (
                    <Directions key={index} direction={text} />
                  ))}
                </div>
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden">
                <div className="bg-[#FFFFFF] rounded-[20px] w-[1160px] min-h-[486px] max-h-[678px] shadow-2xl mt-[102px] flex flex-row ">
                  <div>
                    <div className="w-[437px] min-h-[200px] ">
                      <h1 className=" pt-[28px] w-[398px] h-[120px] text-center text-5xl font-semibold ">
                        Начните путь <br />к новому телу
                      </h1>
                      <div className="w-[437px] text-justify">
                        {currentCourse?.description}
                        {/* <ul className="w-[437px] h-[178px] text-2xl/loose pl-[28px] list-disc pb-[28px]">
                          <li>проработка всех групп мышц</li>
                          <li>тренировка суставов</li>
                          <li>улучшение циркуляции крови</li>
                          <li>упражнения заряжают бодростью</li>
                          <li>помогают противостоять стрессам</li>
                        </ul> */}
                      </div>
                    </div>
                    <div className="pt-[10px]">
                      {userId ? (
                          <div onClick={handleAddFavoriteCourse} className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 text-center">
                            Добавить курс
                          </div>
                      ) : (
                        <>
                          {(isLoginOpened || isSigninOpened) && (
                            <div
                              onClick={() => {
                                setIsLoginOpened(false),
                                  setIsSigninOpened(false);
                              }}
                              className="fixed inset-0 bg-black bg-opacity-50 z-[3]"
                            ></div>
                          )}
                          <div className="justify-center cursor-pointer">
                            <button onClick={openPopLogin}>
                              <div className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 text-center">
                                Войдите, чтобы добавить курс
                              </div>
                            </button>
                            <div className="absolute z-[4] bg-white rounded-[30px] mt-[267px] ml-[540px]">
                              {isLoginOpened && (
                                <PopLogin
                                  transitionFromMainPage={true}
                                  openPopSignin={openPopSignin}
                                />
                              )}
                              {isSigninOpened && (
                                <PopSignin
                                  transitionFromMainPage={true}
                                  openPopLogin={openPopLogin}
                                />
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <img
                      className="rotate-[355deg] pt-[100px] relative "
                      src="/green_line.png"
                      width="670.18px"
                      height="390.98px"
                    />

                    <img
                      className="rotate-[357deg] top-[-655px] z-[1] left-[+150px] relative"
                      src="/running_man.png"
                      width="519.47px"
                      height="539.54px"
                    />
                    <img
                      className="top-[-1110px] z-[2] left-[+250px] relative"
                      src="/black_line.png"
                      width="50px"
                      height="42.5px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
