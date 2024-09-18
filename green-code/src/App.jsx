import LayoutPage from "./components/Layout.jsx";
import { Link, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./components/Pages/Main/Main.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/parks" element={<AppHeader />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
