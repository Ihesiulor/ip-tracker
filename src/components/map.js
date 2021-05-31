/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useContext } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

import SiteContext from "../context/SiteContext";

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN}`;

const Map = () => {
  const { query } = useContext(SiteContext);
  let { coordinates } = query.mapbox;

  const mapRef = useRef(null);
  const map = useRef(null);

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates,
        },
        properties: {
          title: "Mapbox",
          description: "",
        },
      },
    ],
  };

  useEffect(() => {            
    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates,
      zoom: 9,
    });

    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });
  }, [coordinates]);

  return <div className="w-full h-full" ref={mapRef}></div>;
};
export default Map;
