import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useCourses } from "../../hooks/useCourses";
import Fitting from "../../components/Course/Fitting";
import Directions from "../../components/Course/Directions";
import { useUser } from "../../contexts/UserContext";

export default function CoursePage({ description }: { description: string }) {
  const { user } = useUser();
  const { id } = useParams();
  console.log(id);
  const { cards } = useCourses();
  console.dir(cards.find((course) => course._id === id));
  const currentCourse = cards.find((course) => course._id === id);
  const imagePath = "../coursesImages/" + id + ".png";

  console.log(imagePath);
  console.log(description);

  // const {getCoursesList, cards, isLoading} = useCourses()

  //   useEffect(() => {
  //       getCoursesList()
  //   }, [])

  // const [courses, setCourses] = useState<string[]>([]);

  // const [isOpened, setIsOpened] = useState(false);
  // function togglePopup() {
  //   setIsOpened((prev) => !prev);
  // }

  // useEffect(() => {
  //   async function fetchCourses() {
  //     try {
  //       const coursesData = await getCourses();
  //       setCourses(coursesData as unknown as string[]);
  //       console.log(coursesData);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   }
  //   fetchCourses();
  // }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[50px] ">
        <Header />
        {/* <Link to={`/login`}>
      </Link> */}

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
              {currentCourse?.fitting.map((text, index, i) => (
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
                <div className="bg-[#FFFFFF] rounded-[20px] w-[1160px] h-[486px] shadow-2xl mt-[102px] flex flex-row ">
                  <div>
                    <div className="w-[437px] h-[406px] p-[28px]">
                      <h1 className="w-[398px] h-[120px] text-5xl font-semibold ">
                        Начните путь <br />к новому телу
                      </h1>
                      <div className="">
                        {/* {currentCourse?.description} */}
                        <ul className="w-[437px] h-[178px] text-2xl/loose pl-[28px] list-disc pb-[28px]">
                          <li>проработка всех групп мышц</li>
                          <li>тренировка суставов</li>
                          <li>улучшение циркуляции крови</li>
                          <li>упражнения заряжают бодростью</li>
                          <li>помогают противостоять стрессам</li>
                        </ul>
                      </div>
                    </div>

                    {user ? (
                      <Link to={""}>
                        <div className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 text-center">
                          Добавить курс
                        </div>
                      </Link>
                    ) : (
                      <div className="pl-[28px] cursor-pointer">
                        <Link to={`/login`}>
                          <div className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 text-center">
                            Войдите, чтобы добавить курс
                          </div>
                        </Link>
                      </div>
                    )}

                    {/* Если пользователь авторизован */}
                    {/* <Link to={""}>
                        <div className="btn-green w-[437px] h-[52px] text-2xl py-2 px-4 text-center">
                          Добавить курс
                        </div>
                      </Link> */}
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
