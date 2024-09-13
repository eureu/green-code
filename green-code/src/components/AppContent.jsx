import { Button } from "antd";

export default function AppContent() {
  return (
    // <Layout>
    <div
      className="caplya"
      style={{
        height: "1500px",
        paddingTop: "5rem",
        display: "flex"
      }}
    >
      <img
        src="image.png"
        alt=""
        style={{ width: "27%", height: "42%", marginRight: "2rem" }}
      />

      <div className="texts" style={{ flexDirection: "column" }}>
        <div
          className="text-1"
          style={{
            marginBottom: "1rem",
            marginLeft: "2rem",
            width: "70%"
          }}
        >
          {" "}
          <section>
            <h1
              style={{
                fontSize: "36px",
                lineHeight: "43.57px"
              }}
            >
              Уникальная экосистема парков и заповедников
            </h1>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "29px",
                marginBottom: "2rem",
                marginTop: "2rem"
              }}
            >
              Московские парковые и заповедные зоны представляют собой
              уникальную экосистему, которая включает в себя в том числе
              краснокнижных животных. Виды животных, находящихся под угрозой,
              необходимо оберегать от внешнего воздействия. Прежде чем проводить
              мероприятие в парке или приступать к строительным работам, изучите
              фауну выбранного места.
            </p>
            <Button
              style={{
                height: "53px",
                width: "201px",
                borderRadius: "8px",
                backgroundColor: "#6FB0A5",
                padding: "12px 32px 12px 32px"
              }}
            >
              <span style={{ fontSize: "24px", color: "#F8F8F8" }}>
                Найти парк
              </span>
            </Button>
          </section>
        </div>
        <div
          className="text-2"
          style={{ width: "50%", position: "absolute", left: "280px" }}
        >
          <section>
            <h2
              style={{
                fontSize: "36px",
                lineHeight: "43.57px",
                marginTop: "4rem"
              }}
            >
              Какие животные включены в ККМ?
            </h2>
            <p
              style={{
                fontSize: "24px",
                lineHeight: "29px",
                marginBottom: "2rem",
                marginTop: "2rem"
              }}
            >
              Красная книга Москвы включает в себя более чем 500 видов животных.
            </p>
            <Button
              style={{
                height: "53px",
                width: "201px",
                borderRadius: "8px",
                backgroundColor: "#6FB0A5",
                padding: "12px 32px 12px 32px"
              }}
            >
              <span style={{ fontSize: "24px", color: "#F8F8F8" }}>
                Найти парк
              </span>
            </Button>
          </section>
        </div>
      </div>
    </div>

    // </Layout>
  );
}
