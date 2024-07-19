
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css'
import { BrowserRouter } from 'react-router-dom'
import { CoursesProvider } from './contexts/Courses.tsx'
import { EmailProvider } from "./contexts/EmailContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <CoursesProvider>
        <EmailProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </EmailProvider>
      </CoursesProvider>
    </UserProvider>
  </BrowserRouter>
);
