import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import verticaldots from "../assets/verticaldots.png";
import check from "../assets/check.png";

import {
  API_KEY,
  duration_convertor,
  views_convertor,
} from "../constants/utils";

import moment from "moment";
import axios from "axios";

const RecommendedVideoCard = ({ video }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const navigate = useNavigate();

  const navigateAndSendData = () => {
    navigate(`/videoDetails/${video?.snippet.categoryId}/${video?.id}`, {
      state: { channelInfo: channelDetails, videoInfo: videoDetails },
    });
  };

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${video?.snippet?.channelId}&key=${API_KEY}`
        );

        setChannelDetails(data?.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChannelData();

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
  return (
    <div
      className="flex flex-row justify-between md:h-[100px] w-full gap-[8px] md:gap-3 cursor-pointer"
      onClick={navigateAndSendData}
    >
      <div className="overflow-hidden rounded-[3px] md:rounded-lg h-[45px] w-[90px] md:h-[100px] md:w-[168px] md:min-w-[168px] relative">
        <img
          src={video?.snippet?.thumbnails?.high.url}
          alt=""
          className="md:w-[168px] md:h-[100px]  object-fill"
        />
        <span className="absolute bottom-1 right-1 md:bottom-2 md:right-2 px-[5px] py-[1px] rounded-sm bg-black/60 text-white text-[6px] md:text-[12px]">
          {duration_convertor(video?.contentDetails.duration)}
        </span>
      </div>

      <div className="flex flex-row flex-1 justify-between gap-3">
        <div className="flex-1 ">
          <p className="text-[8px]  md:text-[14px]  font-medium text-[#0f0f0f] ">
            {video?.snippet?.title.length > 50
              ? video?.snippet?.title.slice(0, 50) + "..."
              : video?.snippet.title}
          </p>
          <div className="flex flex-row items-center gap-1 md:gap-2 mt-0 md:mt-1 ">
            <span className="font-normal text-[6px] md:text-[12px] text-[#606060] w-max lg:line-clamp-2  ">
              {video?.snippet?.channelTitle}
            </span>
            <img
              src={check}
              alt=""
              className="w-[5px] h-[5px] md:w-3 md:h-3 mr-1 rounded-full"
            />
          </div>

          <p className="font-normal  text-[6px] md:text-[12px] text-[#606060] ">
            {views_convertor(video?.statistics.viewCount)} views &#8226;{" "}
            {moment(video?.snippet.publishedAt).fromNow()}
          </p>
        </div>
      </div>
      <div>
        <img src={verticaldots} alt="dots" className="w-3 md:w-7" />
      </div>
    </div>
  );
};

export default RecommendedVideoCard;
