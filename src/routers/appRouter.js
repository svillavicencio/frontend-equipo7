import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NotFound from "./../pages/notFound";
import LoginPage from "./../pages/LoginPage";
import HomePage from "./../pages/homePage";

function AppRouter() {
  const { user, isLoading } = useAuth();
  console.log(user);
  if (isLoading) return <></>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={user ? <HomePage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
