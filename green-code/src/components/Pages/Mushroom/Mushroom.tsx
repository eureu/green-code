import React, { useEffect, useState } from "react";
import style from "./Mushroom.module.css";
import PhotoCreature from "../Main/PhotoCreature/PhotoCreature.tsx";
import AppHeader from "../../AppHeader.jsx";
import Footer from "../../Footer.jsx";
import Finder from "../../Finder.jsx";
import Ecoactions from "../../Ecoaction/Ecoaction.tsx";
import News from "../../News/News.tsx";
import Banner from "../Main/Banner/Banner.tsx";
import Loader from "../../Loader/Loader.tsx";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Meshroom = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://194.58.98.44:8000/api/v1/get_mushroom');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>
        <AppHeader></AppHeader>
        <Loader/>
        <Footer/></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <>
     <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="page-transition"
                timeout={500}
            >
              <>
        <AppHeader />
      <div className={style.mainPage}>
        <div>
          <span>
            <span className={style.header}>Грибы</span>
            <Finder text={"Найти вид"} placeholder={"Суслик"} />
          </span>
          <div className={style.creature_grid_}>
          {(data.data).map(item => (
                    <PhotoCreature
                        key={item[0]}
                        url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"}
                        width={'220px'}
                        height={'220px'}
                        text={item[1]}
                        link={`/creature/${item[0]}`}
                    />))}
          </div>
        </div>
        <div>
          <News />
          <Ecoactions />
        </div>
      </div>
      <Footer />
      </>
      </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Meshroom;
