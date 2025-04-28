import React from "react";
import VideoCard from "./VideoCard";
import { useGlobalContext } from "../Context";

const HomeVideos = () => {
  const { searchResults } = useGlobalContext();

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 flex-1 gap-x-1 gap-y-4 md:gap-5 px-2 md:px-8">
      {searchResults?.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default HomeVideos;
