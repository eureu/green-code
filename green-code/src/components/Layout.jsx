import AppHeader from "./AppHeader.jsx";
import { Layout } from "antd";
import AppContent from "./AppContent.jsx";
import ParkMap from "./ParkMap.jsx";

export default function LayoutPage() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppContent />
      </Layout>
      <ParkMap />
    </Layout>
  );
}
