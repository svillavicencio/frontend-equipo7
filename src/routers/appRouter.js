import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./../pages/notFound";
import { LoginPage } from "./../components/Login";
import {} from "./";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
