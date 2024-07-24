import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type CourseContextType = {
  currentCourseId: string | null;
  setCurrentCourseId: (id: string | null) => void;
};

const CurrentCourseContext = createContext<CourseContextType | undefined>(
  undefined
);

const CurrentCourseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentCourseId, setCurrentCourseIdState] = useState<string | null>(
    () => {
      const storedCourseId = localStorage.getItem("currentCourseId");
      return storedCourseId ? storedCourseId : null;
    }
  );

  const setCurrentCourseId = (id: string | null) => {
    setCurrentCourseIdState(id);
    if (id) {
      localStorage.setItem("currentCourseId", id);
    } else {
      localStorage.removeItem("currentCourseId");
    }
  };

  useEffect(() => {
    const storedCourseId = localStorage.getItem("currentCourseId");
    if (storedCourseId) {
      setCurrentCourseIdState(storedCourseId);
    }
  }, []);

  return (
    <CurrentCourseContext.Provider
      value={{ currentCourseId, setCurrentCourseId }}
    >
      {children}
    </CurrentCourseContext.Provider>
  );
};

const useCurrentCourse = () => {
  const context = useContext(CurrentCourseContext);
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
};

export { CurrentCourseProvider, useCurrentCourse };
