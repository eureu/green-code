import React, { useEffect } from "react";
import { useState } from "react";
import { YMapMarker } from "ymap3-components";
import style from './mapMarker.module.css';
import { Button } from "antd";

export type ParkData = any[]

// {
  // id: number;
  // name: string;
  // image: string;
  // id_description: number;
  // description_park: string;
  // description: string;
  // list_creatures: {img: string, title: string, describe: string}[];
  // coordinates: number[];

// };

const mainContentFindParkButton = {
  height: "43px",
  width: "110px",
  borderRadius: "8px",
  backgroundColor: "#6FB0A5",
  padding: "12px 32px 12px 32px",
  color: 'white',
};

const list_creatures = [{title: 'Белка', img: '../public/mockData/image.png', describe: 'Описание'}, {title: 'Трясогуска', img: '../public/mockData/image.png', describe: 'Описание'}];

const MapMarker = ({
  // id,
  // name,
  // image,
  // description,
  coordinates,
  // handleClick,
  // list_creatures,
  selectedPark
}) => {
    useEffect(()=> console.log(selectedPark), [selectedPark])

  return (
    <YMapMarker coordinates={coordinates} 
    // onClick={(e) => handleClick(e, id)}
    >
      <svg
        zIndex = "400"
        width="75"
        height="104"
        viewBox="0 0 75 104"
        fill="none"
        transform="scale(0.5)"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.36667 54.8494L6.367 54.85L32.467 100.05L32.4702 100.056C34.859 104.073 40.7367 104.092 43.0336 100.049C43.034 100.048 43.0344 100.048 43.0348 100.047L69.1325 54.8508C83.1261 30.7169 65.6847 0.5 37.8 0.5C9.91512 0.5 -7.52507 30.7163 6.36667 54.8494ZM53.1031 35.5448L53.1029 35.5448L53.1017 35.5585C52.9069 37.8968 52.3231 40.0404 51.3457 42.1911C50.6574 43.6658 49.8756 45.0316 48.9037 46.2951L48.9037 46.2951L48.9 46.3C47.4343 48.2543 45.7795 49.8103 43.7368 51.0749L43.735 51.076C42.1832 52.0459 40.5266 52.7302 38.6528 53.3221C36.7157 53.9028 34.669 54.1 32.6 54.1C31.7308 54.1 30.7557 54.0031 29.8552 53.9031L29.8277 53.9H29.8C29.5917 53.9 29.3957 53.9353 29.2094 54.0181C29.0254 54.0999 28.876 54.2169 28.7464 54.3464L28.7062 54.3867L28.676 54.435C27.6277 56.1122 27.1136 57.9835 26.7107 59.897L26.7 59.9479V59.9867C26.6969 59.9887 26.6935 59.9908 26.6896 59.9931C26.6698 60.005 26.6475 60.0169 26.6168 60.0325C26.1036 60.1822 25.582 60.3849 25.0481 60.5924C25.023 60.6021 24.998 60.6118 24.9729 60.6216C25.0514 60.0771 25.1401 59.5296 25.2808 59.0374L25.2831 59.0294L25.2851 59.0213C25.778 57.0496 26.4644 55.0937 27.4371 53.3428L27.4371 53.3429L27.4412 53.3353C28.2076 51.8982 29.258 50.6588 30.5906 49.7069L30.5907 49.707L30.6 49.7C31.8189 48.7858 32.9336 47.7725 34.0281 46.7774L34.0309 46.7749C35.2416 45.7362 36.3076 44.4781 37.3208 43.2824C37.5087 43.0606 37.6948 42.841 37.8796 42.6254L37.8851 42.619L37.8904 42.6123C39.105 41.0941 40.2208 39.4717 41.1358 37.8451L41.1359 37.8452L41.1402 37.837C41.492 37.1837 41.8434 36.506 42.1927 35.8324L42.1939 35.8302C42.5442 35.1545 42.8924 34.483 43.2402 33.837L43.2438 33.8304L43.2472 33.8236C43.8575 32.603 44.3686 31.3773 44.7779 30.047L44.8 29.9752V29.9C44.8 29.7043 44.7085 29.488 44.5149 29.359C44.4082 29.2879 44.2659 29.2426 44.1074 29.2638C43.9514 29.2846 43.8303 29.3626 43.7464 29.4464L43.6 29.5929V29.732C43.5886 29.7547 43.566 29.7999 43.5475 29.8494C43.5369 29.8776 43.525 29.9137 43.5157 29.9562C42.6515 31.8221 41.4835 33.499 40.2764 35.232C39.9817 35.6552 39.6846 36.0817 39.3891 36.5151C37.5527 39.1241 35.6224 40.9737 33.2728 43.2252L33.158 43.3352C33.1574 43.3358 33.1568 43.3364 33.1561 43.337C32.3776 44.0667 31.5225 44.7269 30.6215 45.4152C30.5732 45.4521 30.5247 45.4891 30.4762 45.5261C29.6239 46.1768 28.735 46.8555 27.8678 47.6263L27.8568 47.6361L27.8464 47.6464C27.1121 48.3807 26.5657 49.1374 26.0818 49.876C25.9025 50.1495 25.7358 50.4141 25.5725 50.6731C25.285 51.1291 25.0083 51.5681 24.6931 52.0094L24.6884 52.0159L24.684 52.0226C24.634 52.0977 24.5921 52.1628 24.5543 52.2216C24.5122 52.2869 24.4752 52.3445 24.4376 52.3992C24.3553 52.2702 24.289 52.16 24.2472 52.0764L24.2473 52.0764L24.2441 52.0703C22.78 49.2397 22 46.1183 22 42.9C22 40.6762 22.4827 38.5413 23.3619 36.3916C24.1394 34.5457 25.2095 32.8909 26.4778 31.4275L26.4779 31.4275L26.4817 31.423C27.5543 30.1554 28.7235 29.0834 30.0906 28.1069L30.1004 28.0999L30.1098 28.0924C31.9711 26.623 34.0345 25.4427 36.2069 24.4552L36.2069 24.4552L36.2129 24.4524C37.8984 23.6592 39.5829 22.9657 41.2664 22.3715L41.2664 22.3716L41.2756 22.3682C42.9304 21.7476 44.4693 20.8219 45.8886 19.8083C46.7772 19.1862 47.6637 18.4879 48.5397 17.7884C48.6203 17.8996 48.709 18.0094 48.8007 18.1065C50.5516 21.0388 51.7239 24.267 52.4103 27.6008L52.4146 27.6217L52.4206 27.642C53.2006 30.2745 53.3961 32.9072 53.1031 35.5448Z"
          fill="#6FB0A5"
          stroke="white"
        />
      </svg>

      {/* selectedPark === id && (
        <div className={style.selectedMarker}>
          <div className={style.innerSelectedMarker}>
            <h3>{name}</h3>
            <div className={style.selected_item}>
              {(list_creatures).map(item => <div className={style.list_item}>
                <img src={item.img}/>
                <span>{item.title}</span>
                </div>)}
            </div>
            <Button
             style={mainContentFindParkButton}>
              Что ещё?
             </Button>
          </div>
        </div>
      ) */}
     

      
    </YMapMarker>
  );
};

export default MapMarker;
