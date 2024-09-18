import React from 'react';
import style from './PhotoCreature.module.css'

const PhotoCreature = ({url, width, height, text}) => {

    return(
        <div style={{width, height, backgroundImage: url}} className={style.container}>
            <span className={style.text}>{text}</span>
        </div>
    )
}

export default PhotoCreature;