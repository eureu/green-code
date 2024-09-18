import AppHeader from "./AppHeader";
import Footer from "./Footer";
import News from "./News/News.tsx";
import "./News/News.module.css";
import Ecoactions from "./Ecoaction/Ecoaction.tsx";
import { useNavigate } from "react-router-dom";

export default function Creature() {
  const navigate = useNavigate();
  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <AppHeader />
      <div
        className="page-animal-content-and-news-and-ecoactions"
        style={{ display: "flex" }}
      >
        <div
          className="animals-content"
          style={{ width: "65%", paddingLeft: "3rem" }}
        >
          <div
            className="heading-with-button"
            style={{ padding: "1rem 0 1rem 0", display: "flex" }}
          >
            <button
              onClick={returnBack}
              style={{
                background: "none",
                border: "none",
                paddingRight: "1rem",
                position: "absolute",
                left: "1.8rem",
                top: "4.3rem"
              }}
            >
              <img src="Vector.png" alt="button" />
            </button>
            <h1 style={{ fontSize: "24px" }}>Обыкновенная кутора</h1>
          </div>
          <img src="yeazsh.png" alt="image" style={{ paddingBottom: "1rem" }} />
          <p>гптшное описани</p>
          <div
            className="animal-descriptions"
            style={{ width: "85%", padding: "1rem 0 1rem 0" }}
          >
            <h3 style={{ paddingBottom: "1rem" }}>
              Необходимые мероприятия по сохранению вида:
            </h3>
            <ul>
              <li>
                <strong>Проверка мест обитания</strong>: Исследование ранее
                известных мест обитания куторы на ООПТ и принятие мер по охране
                при обнаружении вида.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="news-and-ecoactions"
          style={{ padding: "1rem 3rem 0 3rem", width: "35%" }}
        >
          <News />
          <Ecoactions />
        </div>
      </div>
      <Footer />
    </>
  );
}
