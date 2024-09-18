import { Button } from "antd"
import React from 'react';
import style from './News.module.css'

const mainContentFindParkButton = {
    height: "43px",
    width: "110px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    padding: "12px 32px 12px 32px",
    color: 'white',
  };

const News = () => {

    return(
    <div className={style.news}>
        <h2>Новости</h2>
        <div className={style.new}>
            <span className={style.date}>18.09.2024</span>
            <p>Первая фоторегистрация обыкновенного светляка в черте города...</p>
        </div>
        <div className={style.new}>
            <span className={style.date}>10.09.2024</span>
            <p>Годовой рост количества наблюдений редких видов в городе +30%</p>
        </div>
        {/* <Button
        style={mainContentFindParkButton}
        >Смотреть всё</Button> */}
        <a href="/">Смотреть все</a>
    </div>
    )
}

export default News;