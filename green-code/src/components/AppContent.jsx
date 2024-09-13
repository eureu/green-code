import { Button } from "antd";

export default function AppContent() {
  return (
    // <Layout>
    <div className="caplya" style={{ display: "flex" }}>
      <img
        src="../../public/image.png"
        alt="cartoshka"
        style={{ height: "467px", width: "428px" }}
      />
      <section>
        <h3>Уникальная экосистема парков и заповедников</h3>
        <p>
          Московские парковые и заповедные зоны представляют собой уникальную
          экосистему, которая включает в себя в том числе краснокнижных
          животных. Виды животных, находящихся под угрозой, необходимо оберегать
          от внешнего воздействия. Прежде чем проводить мероприятие в парке или
          приступать к строительным работам, изучите фауну выбранного места.
        </p>
        <Button>find park</Button>
      </section>
      <section>
        <h3>Какие животные включены в ККМ?</h3>
        <p>
          Красная книга Москвы включает в себя более чем 500 видов животных.
        </p>
        <Button>find park</Button>
      </section>

      {/* <img src="../../public/caplya.png" alt="necaplya" /> */}
    </div>

    // </Layout>
  );
}
