import React from "react";

export const defautSiteContext = {
  query: {
    mapbox: { coordinates: [-74.5, 40] },
    ipgeo: {
      url: "https://geo.ipify.org/api/v1?",
      ipAddress: "",
    },
  },
  result: false,
  handleSearch: () => {},
};

export default React.createContext(defautSiteContext);
