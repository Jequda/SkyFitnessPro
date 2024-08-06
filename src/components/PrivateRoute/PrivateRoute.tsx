import { Navigate, Outlet } from "react-router-dom";
import { appRoutes } from "../../route/appRoutes";
import { useUser } from "../../contexts/UserContext";

export default function PrivateRoute() {
  const { userId } = useUser();
  return userId ? <Outlet /> : <Navigate to={appRoutes.MAIN} />;
}
