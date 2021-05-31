import React, { useRef, useContext } from "react";

import SiteContext from "../context/SiteContext";

const Search = () => {
  const { handleSearch } = useContext(SiteContext);
  const searchRef = useRef(null);

  return (
    <div className="w-4/5 md:w-2/4 flex flex-col gap-4 md:gap-10 items-center">
      <span className="text-2xl md:text-3xl text-white font-bold">IP Address Tracker</span>
      <div className="flex text-md shadow-md rounded-xl">
        <input
          ref={searchRef}
          type="text"
          name="ip-address"
          placeholder="Search for any IP address or domain"
          className="w-5/6 md:w-35vw px-4 py-3.5 rounded-l-xl border-0 ring-0"
        />
        <div
          onClick={() => handleSearch({ ipAddress: searchRef.current.value })}
          className="flex items-center justify-center bg-black rounded-r-xl border-0"
        >
          <span className="i-arrow h-6 w-6 m-4 text-white"></span>
        </div>
      </div>
    </div>
  );
};
export default Search;
