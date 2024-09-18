import React from 'react';
import style from './PhotoCreature.module.css'

const PhotoCreature = ({url, width, height, text}: {url: string, width:string, height:string, text:string}) => {

    return(
        <div>
            <div style={{width, height}}  className={style.overlay}></div>
            <div style={{width, height, backgroundImage: url}} className={style.container}>
                <span className={style.text}>{text}</span>
            </div>
        </div>
    )
}

export default PhotoCreature;