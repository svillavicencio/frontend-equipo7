import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./../pages/notFound";
import LoginPage from "./../pages/LoginPage";
import HomePage from "./../pages/homePage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
