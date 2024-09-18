import AppHeader from "./AppHeader.jsx";
import { Layout } from "antd";
import AppContent from "./AppContent.jsx";
import ParkMap from "./ParkMap.jsx";
import MainPage from "./Pages/Main/Main.tsx";

export default function LayoutPage() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <MainPage />
      </Layout>
      <ParkMap />
    </Layout>
  );
}
