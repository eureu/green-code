import { Button } from "antd";
import React from "react";
import style from "./Ecoaction.module.css";

const Ecoactions = () => {
 
    return(
    <div className={style.ecoactions}>
        <h2>Экодвижения</h2>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/Mosnature.svg"/>
            <span className={style.title}>ГПБУ «Мосприрода»</span>
        </div>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/ActionECA.svg"/>
            <span className={style.title}>Движение ЭКА</span>
        </div>
        <div className={style.ecoaction}>
            <img className={style.ecoaction_img} src=".../../../public/icons/ecoactions/Ecocenter.svg"/>
            <span className={style.title}>Экоцентр «Заповедники»</span>
        </div>
        {/* <Button
        style={mainContentFindParkButton}
        >Смотреть всё</Button> */}
        <a href="/">Смотреть все</a>
    </div>
  );
};

export default Ecoactions;
