import React, { useEffect, useState } from "react";

import like3 from "../assets/like3.png";
import dislike3 from "../assets/dislike3.png";
import line from "../assets/line.png";
import share1 from "../assets/share1.png";
import cut from "../assets/cut.png";
import dots from "../assets/dots.png";
import avatar from "../assets/avatar.png";
import check from "../assets/check.png";
import Comment from "./Comment";
import { useLocation, useParams } from "react-router-dom";
import { API_KEY, views_convertor } from "../constants/utils";
import moment from "moment";
import axios from "axios";
import { useGlobalContext } from "../Context";
import RecommendedVideoCard from "./RecommendedVideoCard";

const VideoDetails = () => {
  const { setCategory, searchResults } = useGlobalContext();
  const location = useLocation();
  const { categoryId, videoId } = useParams();
  const { channelInfo, videoInfo } = location.state || {};

  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${API_KEY}`
        );

        setComments(
          data.items.filter(
            (item) => item.snippet.topLevelComment.snippet.authorProfileImageUrl
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [videoId]);

  useEffect(() => {
    setCategory(categoryId);
  }, [categoryId]);

  return (
    <>
      <div className="flex flex-row justify-center gap-7 w-full border py-2 md:py-5 px-2 md:px-5 lg:px-16">
        <div className="w-full md:max-w-[850px] h-full ">
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Keema Puri I Special Breakfast I How to make Keema Puri"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-md md:rounded-xl w-full h-[220px] xs:h-[220px] md:h-[480px]"
            ></iframe>

            <div>
              <p className="text-[8px] md:text-xl mt-1 md:mt-4 font-semibold">
                {videoInfo?.snippet.title}
              </p>
              <div className="flex flex-row items-center justify-between mt-1 mb-1 md:mt-3 md:mb-5">
                <div className="flex flex-row items-center  gap-1 md:gap-3">
                  {channelInfo && (
                    <img
                      src={channelInfo?.snippet?.thumbnails?.high?.url}
                      alt="channel-icon"
                      className=" w-[21px] h-[21px] md:w-[40px] md:h-[40px] rounded-full"
                      onError={(e) => (e.target.src = avatar)}
                    />
                  )}
                  <div className="">
                    <div className="flex flex-row items-center text-[6px] md:text-sm font-medium">
                      <p className="flex-1 w-max text-nowrap">
                        {channelInfo?.snippet.title}{" "}
                      </p>
                      <img
                        src={check}
                        alt=""
                        className="w-[5px] h-[5px] md:w-3 md:h-3 ml-[2px] md:ml-1"
                      />
                    </div>
                    <p className="text-[5px] md:text-[12px] text-[#606060]">
                      {views_convertor(channelInfo?.statistics.subscriberCount)}{" "}
                      subscribers
                    </p>
                  </div>
                  <button className="md:ml-5 py-[3px] md:py-2 px-[5px] md:px-5 bg-black text-white rounded-full text-[5px] md:text-[14px] font-semibold">
                    Subscribe
                  </button>
                </div>
                <div className="flex flex-row gap-1 md:gap-3 ">
                  <div className="like-dislike flex flex-row items-center px-[6px] md:px-4 py-[3px] md:py-[7px] bg-[#f0f0f0] rounded-full">
                    <img
                      src={like3}
                      alt="like-icon"
                      className=" w-2 h-2 md:w-6 md:h-6  mr-[3px] md:mr-2"
                    />
                    <span className="font-medium text-[6px] md:text-[15px]">
                      {views_convertor(videoInfo?.statistics.likeCount)}
                    </span>
                    <img
                      src={line}
                      alt="line"
                      className=" w-2 h-2 md:w-6 md:h-6"
                    />
                    <span></span>
                    <img
                      src={dislike3}
                      alt="dislike-icon"
                      className=" w-2 h-2 md:w-6 md:h-6"
                    />
                  </div>
                  <div className="share flex flex-row items-center gap-[3px] md:gap-2 px-[6px] md:px-4 py-[3px] md:py-[7px] bg-[#f0f0f0] rounded-full">
                    <img
                      src={share1}
                      alt=""
                      className="w-2 h-2 md:w-6 md:h-6"
                    />
                    <span className="text-[6px] md:text-[15px]font-medium">
                      Share
                    </span>
                  </div>
                  <div className="clip flex flex-row items-center px-[6px] md:px-4 py-[3px] md:py-[7px] gap-[3px] md:gap-2 bg-[#f0f0f0] rounded-full">
                    <img src={cut} alt="" className="w-2 h-2 md:w-6 md:h-6" />
                    <span className="text-[6px] md:text-[15px]">Clip</span>
                  </div>
                  <div className="flex items-center justify-center  md:h-10 md:w-10 px-1 bg-[#f0f0f0] rounded-full">
                    <img src={dots} alt="" className="w-2 h-2 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="description bg-[#f0f0f0] rounded-lg md:rounded-xl px-[6px] md:px-4 pb-[6px] md:py-3 mt-2">
              <span className="text-[7px] md:text-[15px] font-medium">
                {views_convertor(videoInfo?.statistics.viewCount)} views
              </span>
              <span className="ml-2 md:ml-3 text-[7px] md:text-[15px] font-medium">
                {moment(videoInfo?.snippet.publishedAt).fromNow()}
              </span>
              <p className="text-[7px] md:text-sm mt-1">
                {videoInfo?.snippet.description.length > 300
                  ? videoInfo?.snippet.description.slice(0, 300) + "..."
                  : videoInfo?.snippet.description}
              </p>
            </div>
          </div>
          <div className=" xl:hidden mt-4 border flex-1">
            <div className="flex flex-col gap-1 md:gap-2">
              {searchResults?.map((video, index) => (
                <RecommendedVideoCard key={index} video={video} />
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-[10px] md:text-xl text-[#0f0f0f] mt-3 md:mt-4 mb-2 md:mb-4">
              {videoInfo?.statistics.commentCount} comments
            </p>
            {comments?.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>

        <div className="hidden xl:block  flex-1 xl:min-w-[400px] xl:max-w-[400px] ">
          <div className="flex flex-col gap-1 md:gap-2">
            {searchResults?.map((video, index) => (
              <RecommendedVideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
