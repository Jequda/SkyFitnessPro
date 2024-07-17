import { createContext, ReactNode, useState } from "react";
import { getCourses } from "../firebase";
import { CourseType } from "../types";


type CourseContextType = {
    cards: CourseType[];
    isLoading: boolean;
    getCoursesList: () => void
}

const initialState = {
    cards: [],
    isLoading: false,
    getCoursesList: () => {}
}

export const CoursesContext = createContext<CourseContextType>(initialState)

export const CoursesProvider = ({ children }: { children: ReactNode }) => {
    const [cards, setCards] = useState<CourseType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getCoursesList = () => {
        getCourses().then((courses) => {
            const coursesData = Object.keys(courses).map((id) => courses[id])
            setCards(coursesData)
            setIsLoading(false)
            console.log(cards)
        }).catch((error) => { alert(error) })
    }

    return (
        <CoursesContext.Provider value={{ cards, isLoading, getCoursesList }}>
            {children}
        </CoursesContext.Provider>
    )
}