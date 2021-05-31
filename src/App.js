import React from "react";

import Layout from "./components/layout";
import Search from "./components/search";
import Result from "./components/result";
import Map from "./components/map";

const App = () => (
  <Layout>
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-1/3">
        <div className="relative w-full h-full bg-image bg-center bg-cover bg-no-repeat">
          <div className="w-full pt-5 md:pt-16 flex flex-col items-center gap-6 md:gap-10">
            <Search />
            <Result />
          </div>
        </div>
      </div>
      <div className="w-full h-2/3">
        <Map />
      </div>
    </div>
  </Layout>
);

export default App;
