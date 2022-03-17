import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NotFound from "./../pages/notFound";
import LoginPage from "./../pages/LoginPage";
import HomePage from "./../pages/homePage";
import Abouts from "../pages/Abouts";
import Access from "../pages/Access";
import Capacity from "../pages/Capacity";

function AppRouter() {
  const { user, isLoading } = useAuth();
  if (isLoading) return <></>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/abouts"
          element={user ? <Abouts /> : <Navigate to="/" />}
        />
        <Route
          path="/access"
          element={user ? <Access /> : <Navigate to="/" />}
        />
        <Route
          path="/capacity"
          element={user ? <Capacity /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
