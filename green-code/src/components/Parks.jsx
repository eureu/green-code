import AppHeader from "./AppHeader";
import { Button } from "antd";

export default function Parks() {
  return (
    <>
      <AppHeader />
      <div className="content" style={{ paddingLeft: "7rem" }}>
        <h1>Парки</h1>
        <section>
          Выберите парк, в котором собираетесь прогуляться и посмотрите список
          краснокнижных видов, которые там можно найти
        </section>
        <input type="text" />
        <Button>найти парк</Button>
        <div style={{ backgroundColor: "green" }}>
          <span>Москворецкий парк</span>
        </div>
      </div>
    </>
  );
}
