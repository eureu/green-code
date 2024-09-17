import AppContentText from "./AppContentText.jsx";
import AppContentBackgroundImage from "./AppContentBackgroundImage.jsx";
import Map from './Map/Map.tsx'

export default function AppContent() {
  return (
    <div
      className="main-content"
      style={{
        height: "1500px",
        paddingTop: "5rem",
        display: "flex"
      }}
    >
      <Map/>
      <AppContentBackgroundImage />
      <AppContentText />
    </div>
  );
}
