import React from "react";
import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker
  // ...other components
} from "ymap3-components";
// import { features, LOCATION } from "./helpers";

function ParkMap() {
  const LOCATION = { center: [37.95, 55.65], zoom: 10 };

  const bbox = [
    [37.559, 55.663],
    [37.581, 55.69]
  ];

  // const LOCATION: LocationType = {
  //   center: [37.68, 55.76],
  //   zoom: 16,
  //   bounds: bbox
  // };

  return (
    // <YMapComponentsProvider apiKey={"23ddfe23-c93a-461d-a158-a1bf881fe498"}>
    //   <YMap
    //     // location={reactify.useDefault({
    //     //   center: [25.229762, 55.289311],
    //     //   zoom: 9
    //     // })}
    //     location={{ center: [37.95, 55.65], zoom: 10 }}
    //   >
    //     <YMapDefaultSchemeLayer />
    //     <YMapDefaultFeaturesLayer />
    //     <YMapDefaultMarker coordinates={[25.229762, 55.289311]} />
    //   </YMap>
    // </YMapComponentsProvider>

    <YMapComponentsProvider
      apiKey={"30888d84-d5cc-4242-b612-e9119a293983"}
      lang="en_EN"
    >
      <YMap
        key="map"
        // ref={(ymap: YMaps.YMap) => setYmap(ymap)}
        location={location}
        mode="vector"
        theme="dark"
      >
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
        {/* <YMapListener onUpdate={onUpdate} /> */}
        {/* <YMapClusterer
    method={gridSizedMethod}
    features={[]}
  >
    {points?.map((point) => (
      <YMapMarker coordinates={point} />
    ))}
  </YMapClusterer> */}
        <YMapDefaultMarker coordinates={LOCATION.center} />
      </YMap>
    </YMapComponentsProvider>
  );
}

export default ParkMap;
