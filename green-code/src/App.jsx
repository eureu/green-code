// import "./App.css";
import AppHeader from "./components/AppHeader.jsx";
import AppMain from "./components/AppMain.jsx";
import { Layout, ConfigProvider } from "antd";

// function App() {
//   <AppHeader />;
// }

// export default App;

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgHeader: "#111111"
        }
      }}
    >
      <AppHeader />
    </ConfigProvider>

    // <AppMain />
  );
}
