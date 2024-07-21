import { createContext, ReactNode, useState } from "react";
import { getCourses } from "../firebase";
import { CourseType } from "../types";
import { useUser } from "./UserContext";

type CourseContextType = {
  cards: CourseType[];
  isLoading: boolean;
  getCoursesList: () => void;
  notAddedCards: CourseType[];
  getNotAddedCardsList: () => void;
};

const initialState = {
  cards: [],
  isLoading: false,
  getCoursesList: () => {},
  notAddedCards: [],
  getNotAddedCardsList: () => {},
};

export const CoursesContext = createContext<CourseContextType>(initialState);

export const CoursesProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<CourseType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notAddedCards, setNotAddedCards] = useState<CourseType[]>([]);
  const { userId } = useUser();

  const getCoursesList = () => {
    getCourses()
      .then((courses) => {
        const coursesData = Object.keys(courses).map((id) => courses[id]);
        setCards(coursesData);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getNotAddedCardsList = () => {
    if (userId) {
      setNotAddedCards(
        cards.filter((course) => !Object.keys(course.users).includes(userId))
      );
      setIsLoading(false);
      //   console.log(cards);
      //   console.log(notAddedCards);
    } else return;
  };

  return (
    <CoursesContext.Provider
      value={{
        cards,
        isLoading,
        getCoursesList,
        getNotAddedCardsList,
        notAddedCards,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
