import { LngLat, LngLatBounds } from '@yandex/ymaps3-types';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultMarker,
  YMapDefaultSchemeLayer,
  YMapListener,
  YMapMarker,
} from 'ymap3-components';
import {API_KEY} from '../../config'
import React, { useState } from 'react'
import MapMarker, { ParkData } from './Marker';
import style from './mapMarker.module.css'


const INITIAL_ZOOM = 16;

export type LocationType = {
  center?: LngLat;
  zoom: number;
  bounds?: LngLatBounds;
};

const bbox: LngLatBounds = [
  [37.559, 55.663],
  [37.581, 55.69],
];

const LOCATION: LocationType = {
  center: [37.68, 55.76],
  zoom: INITIAL_ZOOM,
  bounds: bbox,
};

const Map = ({parks, width, height}: {parks: ParkData[], width: string, height :string}) => {
  const [selectedPark, setSelectedPark] = useState<number>(-1)
  const handleClick = (e: Event, id:number) => {setSelectedPark(id); console.log(`${e.target}: Marker Click`)}
  const MapClick = (e:Event) => {
    console.log(e)
    if(e?.type !== 'marker'){
      setSelectedPark(-1); 
    console.log('Map click')}
  }

 
  return (
    <>
    <div style={{width: '759px', height: '625px'}}>
      <YMapComponentsProvider
      apiKey={API_KEY}
      lang="en_EN"
    >
      <YMap className={style.map}
        key="map"
        location={LOCATION}
        // theme="dark"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        <YMapListener 
        onClick={(e:Event) => MapClick(e)}
        ></YMapListener>

        {parks.map(item => <MapMarker {...item} selectedPark={selectedPark} handleClick={handleClick}></MapMarker>)}
        <YMapMarker coordinates={[37.68, 55.76]}></YMapMarker>
        {/* <YMapDefaultMarker coordinates={[37.68, 55.76]}></YMapDefaultMarker> */}
      </YMap>
    </YMapComponentsProvider>
    </div>
    </>
  );
};

export default Map;
