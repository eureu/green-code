import AppHeader from "./components/AppHeader.jsx";
import { Layout } from "antd";
import AppContent from "./components/AppContent.jsx";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppContent />
      </Layout>
    </Layout>
  );
}
