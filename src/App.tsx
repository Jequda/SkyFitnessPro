// New data
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./route/appRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import ResetPage from "./pages/ResetPage/ResetPage";
import MainPage from "./pages/MainPage/MainPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import ResetMailPage from "./pages/ResetMailPage/ResetMailPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WorkoutVideoPage from "./pages/WorkoutVideoPage/WorkoutVideoPage";

function App() {
  return (
    <>
      <Routes>
        {/* { <Route path={appRoutes.MAIN} element={< />}></Route> */}
        <Route path={appRoutes.COURSE} element={<CoursePage description={"string"} />}></Route>
        <Route path={appRoutes.PROFILE} element={<ProfilePage />}></Route>
        <Route path={appRoutes.TRAINING} element={<WorkoutVideoPage />}></Route>
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

// Старые данные 
// import "./App.css";
// import "./styles/common.css";
// import { Route, Routes } from "react-router-dom";
// import { appRoutes } from "./route/appRoutes";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import SigninPage from "./pages/SigninPage/SigninPage";
// import ResetPage from "./pages/ResetPage/ResetPage";
// import ResetMailPage from "./pages/ResetMailPage/ResetMailPage";
// import WorkoutVideoPage from "./pages/WorkoutVideoPage/WorkoutVideoPage";

// function App() {
//   return (
//     <>
//       <Routes>
//         {/* { <Route path={appRoutes.MAIN} element={< />}></Route> */}
//         {/* <Route path={appRoutes.COURSE} element={< />}></Route> */}
//         {/* <Route path={appRoutes.PROFILE} element={< />}></Route> */}
//         <Route path={appRoutes.TRAINING} element={< WorkoutVideoPage/>}></Route>
//         <Route path={appRoutes.LOGIN} element={<LoginPage />}></Route>
//         <Route path={appRoutes.SIGNIN} element={<SigninPage />}></Route>
//         <Route path={appRoutes.RESET} element={<ResetPage />}></Route>
//         <Route path={appRoutes.RESET_MAIL} element={<ResetMailPage />}></Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
