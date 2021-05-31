import React, { useContext } from "react";

import SiteContext from "../context/SiteContext";

const Result = () => {
  const { result } = useContext(SiteContext);
console.log({result});

  if (!result)
    return (
      <div className="w-4/5 p-6 md:py-8 flex flex-col md:flex-row gap-5 md:divide-x md:divide-gray-400 items-center justify-evenly bg-white text-sm text-gray-500 font-semibold tracking-wide rounded-xl shadow-md md:shadow-xl z-10">
        <p className="md:pl-4 md:gap-3 flex flex-col items-center">
          <span className="">IP ADDRESS</span>
          <span className=""></span>
        </p>
        <p className="md:pl-4 md:gap-3 flex flex-col items-center">
          <span className="">LOCATION</span>
          <span className=""></span>
        </p>
        <p className="md:pl-4 md:gap-3 flex flex-col items-center">
          <span className="">TIMEZONE</span>
          <span className=""></span>
        </p>
        <p className="md:pl-4 md:gap-3 flex flex-col items-center">
          <span className="">ISP</span>
          <span className=""></span>
        </p>
      </div>
    );
  return (
    <div className="w-4/5 p-5 md:py-8 flex flex-col md:flex-row gap-3 md:divide-x md:divide-gray-400 items-center justify-evenly text-center bg-white text-sm text-gray-500 font-semibold rounded-xl shadow-md md:shadow-xl z-10">
      <p className="md:pl-4 md:gap-3 flex flex-col items-center md:items-start">
        <span className="">IP ADDRESS</span>
        <span className="w-4/5 text-xl text-2xl text-black">{result.ip}</span>
      </p>
      <p className="md:pl-4 md:gap-3 flex flex-col items-center md:items-start">
        <span className="">LOCATION</span>
        <span className="w-4/5 text-xl text-2xl text-black">{`${result.location.city}, ${result.location.region} ${result.location.postalCode}`}</span>
      </p>
      <p className="md:pl-4 md:gap-3 flex flex-col items-center md:items-start">
        <span className="">TIMEZONE</span>
        <span className="w-4/5 text-xl text-2xl text-black">{`UTC ${result.location.timezone}`}</span>
      </p>
      <p className="md:pl-4 md:gap-3 flex flex-col items-center md:items-start">
        <span className="">ISP</span>
        <span className="w-4/5 text-xl text-2xl text-black">{result.isp}</span>
      </p>
    </div>
  );
};
export default Result;
