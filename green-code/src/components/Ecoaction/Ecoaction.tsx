import { Button } from "antd"
import React from 'react';
import style from './Ecoaction.module.css'

const mainContentFindParkButton = {
    height: "43px",
    width: "110px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    padding: "12px 32px 12px 32px",
    color: 'white',
  };

const Ecoactions = () => {

    return(
    <div className={style.ecoactions}>
        <h2>Экодвижения</h2>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/ActionECA.svg"/>
            <span className={style.title}>ГПБУ «Мосприрода»</span>
        </div>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/ActionECA.svg"/>
            <span className={style.title}>Движение ЭКА</span>
        </div>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/ActionECA.svg"/>
            <span className={style.title}>Экоцентр «Заповедники»</span>
        </div>
        {/* <Button
        style={mainContentFindParkButton}
        >Смотреть всё</Button> */}
        <a href="/">Смотреть все</a>
    </div>
    )
}

export default Ecoactions;