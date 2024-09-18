import AppHeader from "./AppHeader";
import { Button, Input } from "antd";
import Footer from "./Footer";
const mainContentFindParkButton = {
  // height: "53px",
  // width: "201px",
  borderRadius: "8px",
  backgroundColor: "#6FB0A5",
  padding: "12px 32px 12px 32px",
  // width: "10%",
  marginLeft: "3rem",
  color: "#f8f8f8"
};
export default function Parks() {
  return (
    <>
      <AppHeader />
      <div className="content" style={{ width: "65%", paddingLeft: "3rem" }}>
        <h1 style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>Парки</h1>
        <section style={{ fontSize: "24px", paddingBottom: "3rem" }}>
          Выберите парк, в котором собираетесь прогуляться и посмотрите список
          краснокнижных видов, которые там можно найти
        </section>
        <div
          className="finder"
          style={{
            paddingBottom: "3rem",
            width: "70%",
            display: "flex",
            height: "5rem"
          }}
        >
          <Input
            allowClear
            variant="filled"
            placeholder="Зарядье"
            style={
              {
                // width: "60%"
                // paddingRight: "3rem"
              }
            }
          />
          <Button style={mainContentFindParkButton}>найти парк</Button>
        </div>

        {/* <div>
          <img
            src="zaryadye.png"
            alt="Зарядье"
            style={{ width: "100%", paddingBottom: "3rem", paddingTop: "3rem" }}
          />
<span style={{backgroundImage:}}></span>
          <span>Москворецкий парк</span>
        </div> */}
        <div>
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
                bottom: "0", // Располагаем span внизу
                left: "0", // Располагаем span слева
                padding: "10px",
                fontSize: "24px",
                color: "#F8F8F8",
                fontWeight: "700"
              }}
            >
              Зарядье
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
