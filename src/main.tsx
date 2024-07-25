import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./output.css";
import { BrowserRouter } from "react-router-dom";
import { CoursesProvider } from "./contexts/Courses.tsx";
import { EmailProvider } from "./contexts/EmailContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { CurrentCourseProvider } from "./contexts/CurrentCourseContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <CoursesProvider>
        <CurrentCourseProvider>
          <EmailProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </EmailProvider>
        </CurrentCourseProvider>
      </CoursesProvider>
    </UserProvider>
  </BrowserRouter>
);
