import { Button } from 'antd';
import React from 'react';
import style from './Banner.module.css'
import { MetroIcon } from '../../../Icons/Icons';

const mainContentFindParkButton = {
    height: "43px",
    width: "110px",
    borderRadius: "8px",
    backgroundColor: "#6FB0A5",
    padding: "12px 32px 12px 32px",
    color: 'white',
    border: 'none',
  };

const Banner = ({rightBottom, title}) => {
    return (
        <div className={style.banner}>
        <div className={style.inner_banner}>
            {rightBottom === "" && <>
            <h3>Внеси свой вклад в обновление данных о редких видах</h3>
            <p>Если увидели в парке краснокнижное животное или растение, покажите нам фото: это поможет экологам точнее определять ареал обитания редких видов</p>
            <Button style={mainContentFindParkButton} onClick={() => {setModalOpen(true)}}>Загрузить фото</Button>
            </>
            }
            {rightBottom !== "" && 
            <>
            <p className={style.title}>{title}</p>
            <p className={style.rightBottom_text}>
                <MetroIcon/>
                {rightBottom}</p>
            </>
            }
        </div>
        </div>
    )
}

export default Banner;