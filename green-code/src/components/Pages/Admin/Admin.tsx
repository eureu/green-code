import React from "react";
import AppHeader from "../../AppHeader";
import Footer from "../../Footer";
import Ecoactions from "../../Ecoaction/Ecoaction";
import News from "../../News/News";
import Map from "../../Map/Map";
import style from "./Admin.module.css";
import Filters from "./Filters";

const AdminPage = () => {
  return (
    <>
      <AppHeader />
      <div>
        <div className={style.body}>
          <div className={style.inner_flex}>
            <h1>Зафиксированные виды</h1>
            <p>
              Настройте фильтры для отображения конкретного
              вида/парка/кадастрового участка
            </p>
            <Filters />
            <iframe src="https://geoplys.ru/kadastrovaja-karta-moskvy/"/>
            <Map parks={[]} width={"739px"} height={"425px"} />
            <button>Скачать CSV</button>
          </div>
          <div>
            <News />
            <Ecoactions />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
