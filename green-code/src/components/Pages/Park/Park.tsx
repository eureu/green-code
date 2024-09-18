import React from 'react';
// import style from './MainPage.module.css'
import style from './Park.module.css'
// import Banner from './Banner/Banner';
import PhotoCreature from '../Main/PhotoCreature/PhotoCreature.tsx';
import AppHeader from '../../AppHeader.jsx';
import Footer from '../../Footer.jsx';
import Finder from '../../Finder.jsx';
import Ecoactions from '../../Ecoaction/Ecoaction.tsx';
import News from '../../News/News.tsx';
import Banner from '../Main/Banner/Banner.tsx';
import { useParams } from 'react-router-dom';

const ParkPage = () => {
    const {id} = useParams();
    const data: any[] = []
    const animalsData = data.filter(item => item.type === 'animal')
    const plantData = data.filter(item => item.type === 'plant')
    const describe = "Описание"

    return(
        <>
        <AppHeader/>
    <div className={style.mainPage}>
        <div>
            <Banner rightBottom={'Китай-город'} title={'Зарядье'}/>
            <p className={style.describe}>{describe}</p>
            <span><span className={style.header}>Животные</span>
            <Finder text={'Найти вид'} placeholder={'Суслик'}/>
            </span>
            <div className={style.creature_grid}>
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>  
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/> 
                {/* {animalsData.map(item => 
                    <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={item.text}/>   
                )}   */}
            </div>
            <p className={style.header}>Растения</p>
            <div className={style.creature_grid_}>
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>  
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/> 
                {/* {animalsData.map(item => 
                    <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={item.text}/>   
                )}   */}
            </div>
        </div>
        <div>
            <News/>
            <Ecoactions/>
        </div>
    </div>
    <Footer/>
</>)
}

export default ParkPage;