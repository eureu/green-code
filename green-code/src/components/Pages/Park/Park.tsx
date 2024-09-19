import React, { useEffect, useState } from 'react';
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
import Loader from '../../Loader/Loader.tsx';

const ParkPage = () => {
    const {id} = useParams();
    const describe = "Описание"
    const [creaturesData, setCreaturesData] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCreatures = async () => {
            try {
                const response = await fetch('http://194.58.98.44:8000/api/v1/get_creatures', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setCreaturesData(data);
                setLoading(false);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setLoading(false);
            }
        };
        fetchCreatures();
    }, []);

    if (loading) {
        return <div>
        <AppHeader></AppHeader>
        <Loader/>
        <Footer/></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                {/* <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>  
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={'Животные'}/>  */}
                {creaturesData?.data.map(item => {
                    if(item[2] === "animal")
                    return <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={item[1]}/>  
                } 
                )}  
            </div>
            <p className={style.header}>Растения</p>
            <div className={style.creature_grid_}>
                {/* <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>  
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>   
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/> 
                <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Plants.jpg')"} width={'220px'} height={'220px'} text={'Растения'}/>  */}
                {creaturesData?.data.length !== 0 && creaturesData?.data.map(item => 
                    {
                        if(item[2] === "plant")
                        return  <PhotoCreature url={"url('../../../../../public/icons/MainCreatures/Mammals.jpg')"} width={'220px'} height={'220px'} text={item[1]}/>   
                    } 
                )}  
                {creaturesData?.data.length === 0 && <span className={style.notFound}>Растения не найдены</span>}
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