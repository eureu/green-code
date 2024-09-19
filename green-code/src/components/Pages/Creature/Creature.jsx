import { useNavigate } from "react-router-dom";
import Footer from "../../Footer.jsx";
import AppHeader from "../../AppHeader.jsx";
import News from "../../News/News.tsx";
import Ecoactions from "../../Ecoaction/Ecoaction.tsx";

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
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.633 0.292484C10.228 -0.097496 9.57306 -0.0974959 9.16908 0.292484L0.606516 8.55607C0.414846 8.73822 0.262227 8.95746 0.157938 9.20044C0.053649 9.44342 -0.0001306 9.70508 -0.000130577 9.9695C-0.000130553 10.2339 0.0536491 10.4956 0.157938 10.7386C0.262227 10.9815 0.414847 11.2008 0.606516 11.3829L9.23108 19.7075C9.42682 19.8935 9.68603 19.9981 9.95607 20C10.2261 20.0018 10.4867 19.9008 10.685 19.7175C10.7832 19.627 10.8618 19.5172 10.9159 19.3951C10.97 19.273 10.9985 19.141 10.9995 19.0074C11.0005 18.8738 10.9741 18.7415 10.9219 18.6185C10.8697 18.4956 10.7928 18.3846 10.696 18.2926L2.80241 10.676C2.70649 10.5849 2.63012 10.4752 2.57792 10.3537C2.52573 10.2322 2.49882 10.1013 2.49882 9.969C2.49882 9.83673 2.52573 9.70584 2.57792 9.5843C2.63012 9.46276 2.70649 9.35312 2.80241 9.26203L10.633 1.70541C10.7289 1.61442 10.8053 1.50486 10.8574 1.3834C10.9096 1.26195 10.9365 1.13114 10.9365 0.998949C10.9365 0.86676 10.9096 0.735952 10.8574 0.614498C10.8053 0.493042 10.7289 0.38348 10.633 0.292484Z" fill="black"/>
            </svg>

            </button>
            <h1 style={{ fontSize: "24px" }}>Обыкновенная кутора</h1>
          </div>
          <img src="./public/Animal.jpg" alt="image" style={{ paddingBottom: "1rem" }} />
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