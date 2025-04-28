import React from "react";
import ShortSidebar from "./ShortSidebar";
import HomeVideos from "./HomeVideos";

const Home = () => {
  return (
    <div className="flex flex-row py-5 ">
      <ShortSidebar />
      <HomeVideos/>
    </div>
  );
};

export default Home;
