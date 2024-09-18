import React from 'react';
import style from './PhotoCreature.module.css'

const PhotoCreature = ({url, width, height, text}: {url: string, width:string, height:string, text:string}) => {

    return(
        <div style={{width, height, backgroundImage: url}} className={style.container}>
            <span className={style.text}>{text}</span>
        </div>
    )
}

export default PhotoCreature;