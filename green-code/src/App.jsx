import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./components/Pages/Main/Main.tsx";
import Parks from "./components/Parks.jsx";
// import Animals from "./components/Animals.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/parks" element={<Parks />} />
      {/* <Route path="/animals" element={<Animals />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
