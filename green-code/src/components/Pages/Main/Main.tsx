import React from "react";
// import style from './MainPage.module.css'
import News from "../../News/News";
import Ecoactions from "../../Ecoaction/Ecoaction";
import Map from "../../Map/Map";
import { MockParks } from "../../../mockData";
import style from "./MainPage.module.css";
import Banner from "./Banner/Banner";
import PhotoCreature from "./PhotoCreature/PhotoCreature";
import AppHeader from "../../AppHeader/AppHeader";
import Footer from "../../Footer";

const MainPage = () => {
  return (
    <>
      <AppHeader />
      <div className={style.mainPage}>
        <div>
          <Banner />
          <div className={style.greeting}>
            <h1>Что такое Красная книга Москвы?</h1>
            <p>
              ККМ — это проект, который направлен на популяризацию и
              актуализацию информации о краснокнижных животных и растениях.
            </p>
            <p>
              На сайте вы можете ознакомиться с электронной версией Красной
              книги Москвы. А если встретите кого-то оттуда вживую, то
              присылайте фотографию в нашу форму: это очень ценная информация
              для учёных.
            </p>
            <div className={style.photoCreatures}>
              <PhotoCreature
                url={
                  "url('../../../../../public/icons/MainCreatures/Mammals.jpg')"
                }
                width={"220px"}
                height={"220px"}
                text={"Животные"}
              />
              <PhotoCreature
                url={
                  "url('../../../../../public/icons/MainCreatures/Plants.jpg')"
                }
                width={"220px"}
                height={"220px"}
                text={"Растения"}
              />
              <PhotoCreature
                url={
                  "url('../../../../../public/icons/MainCreatures/Mushrooms.jpg')"
                }
                width={"220px"}
                height={"220px"}
                text={"Грибы"}
              />
            </div>
          </div>
          <div className={style.search}>
            <h2>Узнайте, кого можно встретить в парках</h2>
            <p>
              Выберите парк, в котором собираетесь прогуляться и посмотрите
              список краснокнижных видов, которые там можно найти.
            </p>
          </div>
          <div className={style.map}>
            <Map parks={MockParks} width={"200px"} height={"425px"} />
          </div>
        </div>
        <div className={style.newAndEcoActions}>
          <News />
          <Ecoactions />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
