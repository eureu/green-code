import React from 'react';
import style from './PhotoCreature.module.css'
import { useNavigate } from 'react-router-dom';

const PhotoCreature = ({url, width, height, text, link}: {url: string, width:string, height:string, text:string, link?: string}) => {
    const navigate = useNavigate();

    return(
        <div>
            <div style={{width, height}}  className={style.overlay} onClick={() => {if(link) {navigate(link)}}}></div>
            <div style={{width, height, backgroundImage: url}} className={style.container}>
                <span className={style.text}>{text}</span>
            </div>
        </div>
    )
}

export default PhotoCreature;