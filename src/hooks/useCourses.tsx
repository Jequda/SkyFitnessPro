import { useContext } from "react";
import { CoursesContext } from "../contexts/Courses";

export function useCourses() {
    return useContext(CoursesContext)
}