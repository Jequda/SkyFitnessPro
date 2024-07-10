import "./App.css";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./route/appRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import ResetPage from "./pages/ResetPage/ResetPage";
import MainPage from "./pages/MainPage/MainPage";
import CoursePage from "./pages/CoursePage/CoursePage";

function App() {
  return (
    <>
      <Routes>
        {/* { <Route path={appRoutes.MAIN} element={< />}></Route> */}
        <Route path={appRoutes.COURSE} element={<CoursePage />}></Route>
        {/* <Route path={appRoutes.PROFILE} element={< />}></Route> */}
        {/* <Route path={appRoutes.TRAINING} element={< />}></Route> */}
        <Route path={appRoutes.LOGIN} element={<LoginPage />}></Route>
        <Route path={appRoutes.SIGNIN} element={<SigninPage />}></Route>
        <Route path={appRoutes.RESET} element={<ResetPage />}></Route>
        <Route path={appRoutes.RESET_MAIL} element={<ResetMailPage />}></Route>
        <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
