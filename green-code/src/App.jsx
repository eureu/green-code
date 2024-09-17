import LayoutPage from "./components/Layout.jsx";
import { Link, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />} />
      <Route path="/parks" element={<AppHeader />} />
    </Routes>
  );
}
