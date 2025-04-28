import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import verticaldots from "../assets/verticaldots.png";
import check from "../assets/check.png";

import {
  API_KEY,
  duration_convertor,
  views_convertor,
} from "../constants/utils";
import axios from "axios";
import moment from "moment";

const VideoCard = ({ video }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${video?.snippet?.channelId}&key=${API_KEY}`
        );

        setChannelDetails(data?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannelDetails();

    const fetchVideoDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${video.id}&key=${API_KEY}`
        );
        setVideoDetails(data?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVideoDetails();
  }, [video]);

  const navigateAndSendData = () => {
    navigate(`/videoDetails/${video.snippet.categoryId}/${video.id}`, {
      state: { channelInfo: channelDetails, videoInfo: videoDetails },
    });
  };

  return (
    <div
      className="flex flex-col h-max gap-2 md:gap-3 cursor-pointer "
      onClick={navigateAndSendData}
    >
      <div className="w-full overflow-hidden rounded-md md:rounded-xl relative">
        <img
          src={video?.snippet?.thumbnails?.high.url}
          alt=""
          className=" h-[100px] xs:h-[140px] sm:h-[150px] md:h-[200px] lg:h-[230px] w-full object-cover"
        />
        <span className="absolute bottom-2 right-2 px-[5px] py-[1px] rounded-sm bg-black/60 text-white text-[8px] md:text-[12px]">
          {duration_convertor(video?.contentDetails?.duration)}
        </span>
      </div>
      <div className="flex flex-row gap-3">
        <div className="rounded-full w-4 h-4 md:w-10 md:h-10">
          <img
            src={channelDetails?.snippet.thumbnails.default.url}
            alt="channel-pic"
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <p className="text-[8px] md:text-[14px] lg:text-[16px] font-medium text-[#0f0f0f]">
            {video?.snippet?.title}
          </p>
          <div className="flex flex-row items-center gap-2 mt-0 md:mt-1">
            <span className="font-normal text-[6px] md:text-[11px] lg:text-[15px] text-[#848484]">
              {video?.snippet?.channelTitle}
            </span>
            <img
              src={check}
              alt=""
              className="w-2 h-2 md:w-3 md:h-3 mr-1 rounded-full"
            />
          </div>

          <p className="font-normal text-[6px] md:text-[11px] lg:text-[15px] text-[#848484]">
            {views_convertor(videoDetails?.statistics.viewCount)} views &#8226;{" "}
            {moment(videoDetails?.snippet.publishedAt).fromNow()}
          </p>
        </div>
        <div>
          <img src={verticaldots} alt="dots" className="w-4 md:w-7" />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
