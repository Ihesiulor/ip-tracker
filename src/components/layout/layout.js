import React, { useState, useEffect } from "react";

import SiteContext, { defautSiteContext } from "../../context/SiteContext";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [query, setQuery] = useState(defautSiteContext.query);
  const [result, setResult] = useState(defautSiteContext.result);

  const handleSearch = ({ ipAddress }) => {
    setQuery((prev) => ({
      mapbox: prev.mapbox,
      ipgeo: { url: prev.ipgeo.url, ipAddress },
    }));
  };

  const handleResult = (data) => {
    let { lng, lat } = data.location;
    setQuery((prev) => ({
      ipgeo: prev.ipgeo,
      mapbox: { coordinates: [lng, lat] },
    }));
    setResult(data);
  };
  const fetchData = async () => {
    let { url, ipAddress } = query.ipgeo;

    const response = await fetch(
      `${url}apiKey=${process.env.REACT_APP_IPGEO_API_KEY}&ipAddress=${ipAddress}`
    );
    const data = await response.json();
    handleResult(data);
  };

  const siteContext = {
    query,
    result,
    handleSearch: (data) => handleSearch(data),
  };

  useEffect(() => {
    fetchData();
  }, [query.ipgeo.ipAddress]);

  return (
    <SiteContext.Provider value={siteContext}>
      <div className="w-full h-screen overflow-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </SiteContext.Provider>
  );
};

export default Layout;
