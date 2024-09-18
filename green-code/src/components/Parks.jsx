import AppHeader from "./AppHeader";
import Footer from "./Footer";
import Finder from "./Finder/Finder";
import "./Finder/Finder.css";
import News from "./News/News.tsx";
import "./News/News.module.css";
import Ecoactions from "./Ecoaction/Ecoaction.tsx";

export default function Parks() {
  return (
    <>
      <AppHeader />
      <div className="park-and-news-and-ecoactions" style={{ display: "flex" }}>
        <div className="park" style={{ width: "65%", paddingLeft: "3rem" }}>
          <h1
            style={{
              paddingBottom: "1rem",
              paddingTop: "1rem",
              fontSize: "24px"
            }}
          >
            Парки
          </h1>
          <section style={{ fontSize: "16px", paddingBottom: "1rem" }}>
            Выберите парк, в котором собираетесь прогуляться и посмотрите список
            краснокнижных видов, которые там можно найти
          </section>

          <div>
            <Finder text={"Найти парк"} placeholder={"Зарядье"} />
            <div
              className="park-list-element"
              style={{
                backgroundImage: "url('zaryadye_2.png')",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100px",
                position: "relative"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  backgroundColor: "0",
                  bottom: "0",
                  left: "0",
                  padding: "10px",
                  fontSize: "16px",
                  color: "#F8F8F8",
                  fontWeight: "700"
                }}
              >
                Зарядье
              </span>
            </div>
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
