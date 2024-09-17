import { LngLat, LngLatBounds } from '@yandex/ymaps3-types';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from 'ymap3-components';
import {API_KEY} from '../../config'
import React from 'react'


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

const Map = () => {
 

  return (
    <>
      <YMapComponentsProvider
      apiKey={API_KEY}
      lang="en_EN"
    >
      <YMap
        key="map"
        location={LOCATION}
        mode="vector"
        theme="dark"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </YMapComponentsProvider>
    </>
  );
};

export default Map;
