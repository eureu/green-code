import React, { useState, useEffect } from 'react';
// import style from './MainPage.module.css'
import News from '../../News/News';
import Ecoactions from '../../Ecoaction/Ecoaction';
import Map from '../../Map/Map'
import { MockParks } from '../../../mockData';
import style from './MainPage.module.css'
import Banner from './Banner/Banner';
import PhotoCreature from './PhotoCreature/PhotoCreature';
import AppHeader from '../../AppHeader';
import Footer from '../../Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

type DataType = {data: any[]}

const MainPage = () => {
    const [data, setData] = useState<DataType>({data: []})

    useEffect(()=> {
            fetch('http://194.58.98.44:8000/api/v1/get_parks').then(res => {
                if(res.ok)
                return (res.json())
                else {
                    return new Error("ошибка в запросе")
                }

            }).then(ans => setData(ans))
            .catch(err => console.log(err))
    }, [])


    return(
        <>
       
        <AppHeader/>
    <div className={style.mainPage}>
        <div className={style.container}>
            <Banner rightBottom={''} title={''}/>
            <div className={style.greeting}>
                <h1>Что такое Красная книга Москвы?</h1>
                <p>ККМ — это проект, который направлен на популяризацию и актуализацию информации о краснокнижных животных и растениях.</p>
                <p>На сайте вы можете ознакомиться с электронной версией Красной книги Москвы. А если встретите кого-то оттуда вживую, то присылайте фотографию в нашу форму: это очень ценная информация для учёных.</p>
                <div className={style.photoCreatures}>
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'} link={'/animals'}/>
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'} link={'/plants'}/>
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mushrooms.jpg')"} width={'220px'} height={'220px'} text={'Грибы'} link={'/mushrooms'}/>                   
                </div>
            </div>
            <div className={style.search}>
                <h2>Узнайте, кого можно встретить в парках</h2>
                <p>Выберите парк, в котором собираетесь прогуляться и посмотрите список краснокнижных видов, которые там можно найти.</p>
            </div>
            <Map parks={data?.data.map(item => ({id: item[0], cords: item[5] }) )} width={'739px'} height={'625px'}/>
        </div>
        <div>
            <News/>
            <Ecoactions/>
        </div>
    </div>
    <Footer/>
</>)
}

export default MainPage;