import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./components/Pages/Main/Main.tsx";
import Parks from "./components/Parks.jsx";
import ParkPage from "./components/Pages/Park/Park.tsx";
import Animals from "./components/Pages/Animals/Animals.tsx";
import Plants from "./components/Pages/Plants/Plants.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/parks" element={<Parks />} />
      <Route path="/animals" element={<Animals />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/park/:id" element={<ParkPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
