import React from "react";
import AppHeader from "../../AppHeader";
import Footer from "../../Footer";
import Ecoactions from "../../Ecoaction/Ecoaction";
import News from "../../News/News";
import Map from "../../Map/Map";
import style from "./Admin.module.css";
import Filters from "./Filters";



const parks = [
    {'Москворечье': [55.757197, 37.427884]},
    {'Зарядье': [ 55.75103, 37.62847]}
]


// function getNearPoints = () => {
//     fetch('https://geocode-maps.yandex.ru/1.x/?apikey=YOUR_API_KEY&geocode=бул+Мухаммед+Бин+Рашид,+дом+1&format=json')
// }

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
            {/* <iframe src="https://geoplys.ru/kadastrovaja-karta-moskvy/" style={{height: '400px'}}/> */}
            <Map parks={[]} width={"739px"} height={"425px"} />
            <button style={{width: "200px", backgroundColor: "#6FB0A5", border: "none"}}>Скачать CSV</button>
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
