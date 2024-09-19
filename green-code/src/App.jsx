import LayoutPage from "./components/Layout.jsx";
import { Link, Route, Routes } from "react-router-dom";
import AppHeader from "./components/AppHeader.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./components/Pages/Main/Main.tsx";
import Parks from "./components/Parks.jsx";
import ParkPage from "./components/Pages/Park/Park.tsx";
import Animals from "./components/Pages/Animals/Animals.tsx";
import Plants from "./components/Pages/Plants/Plants.tsx";
import {AuthProvider} from './context/AuthContext.tsx'
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import AdminPage from "./components/Pages/Admin/Admin.tsx";
import Creature from "./components/Pages/Creature/Creature.jsx";
import Mushroom from "./components/Pages/Mushroom/Mushroom.tsx";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/creature/:id" element={<Creature />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/mushrooms" element={<Mushroom />} />
        <Route path="/park/:id" element={<ParkPage />} />
        {/* <ProtectedRoute path="/panel" element={<AdminPage />} /> */}
        <Route path="/panel" element={<AdminPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}
