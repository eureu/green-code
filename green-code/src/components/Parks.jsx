import AppHeader from "./AppHeader";
import { Button, Input } from "antd";

export default function Parks() {
  return (
    <>
      <AppHeader />
      <div className="content" style={{ paddingLeft: "7rem" }}>
        <h1 style={{ paddingBottom: "3rem", paddingTop: "3rem" }}>Парки</h1>
        <section style={{ width: "55%", fontSize: "24px" }}>
          Выберите парк, в котором собираетесь прогуляться и посмотрите список
          краснокнижных видов, которые там можно найти
        </section>
        <Input
          variant="filled"
          placeholder="Зарядье"
          style={{ width: "10%" }}
        />
        <Button style={{ padding: "1rem" }}>найти парк</Button>
        <div style={{ backgroundColor: "green" }}>
          <span>Москворецкий парк</span>
        </div>
      </div>
    </>
  );
}
