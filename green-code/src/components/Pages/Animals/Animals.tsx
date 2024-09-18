import React from 'react';
// import style from './MainPage.module.css'
import style from './Animals.module.css'
// import Banner from './Banner/Banner';
import PhotoCreature from '../Main/PhotoCreature/PhotoCreature.tsx';
import AppHeader from '../../AppHeader.jsx';
import Footer from '../../Footer.jsx';
import Finder from '../../Finder.jsx';
import Ecoactions from '../../Ecoaction/Ecoaction.tsx';
import News from '../../News/News.tsx';
import Banner from '../Main/Banner/Banner.tsx';

const Animals = () => {
    const data: any[] = []
    const animalsData = data.filter(item => item.type === 'animal')
    const plantData = data.filter(item => item.type === 'plant')

    return(
        <>
        <AppHeader/>
    <div className={style.mainPage}>
        <div>
            <span><span className={style.header}>Животные</span>
            <Finder text={'Найти вид'} placeholder={'Суслик'}/>
            </span>
            <div className={style.creature_grid_}>
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
        </div>
        <div>
            <News/>
            <Ecoactions/>
        </div>
    </div>
    <Footer/>
</>)
}

export default Animals;