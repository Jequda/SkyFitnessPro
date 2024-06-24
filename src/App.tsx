import "./App.css";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./route/appRoutes";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        {/* { <Route path={appRoutes.MAIN} element={< />}></Route> */}
        {/* <Route path={appRoutes.COURSE} element={< />}></Route> */}
        {/* <Route path={appRoutes.PROFILE} element={< />}></Route> */}
        {/* <Route path={appRoutes.TRAINING} element={< />}></Route> */}
        <Route path={appRoutes.LOGIN} element={<LoginPage />}></Route>
        {/* <Route path={appRoutes.SIGNIN} element={< />}></Route>  */}
      </Routes>
    </>
  );
}

export default App;
