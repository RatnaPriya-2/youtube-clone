import React from "react";
import like3 from "../assets/like3.png";
import dislike3 from "../assets/dislike3.png";
import { Link } from "react-router-dom";
import moment from "moment";
import user from "../assets/user.png";
import verticaldots from "../assets/verticaldots.png";

import { decodeHtmlEntities } from "../constants/utils";

const Comment = ({ comment }) => {
  const data = comment?.snippet?.topLevelComment?.snippet;

  const commentData = {
    author: data?.authorDisplayName,
    text: data?.textDisplay,
    publishedAt: data?.publishedAt,
    authorProfileImageUrl: data?.authorProfileImageUrl,
    authorChannelUrl: data?.authorChannelUrl,
    likeCount: data?.likeCount,
  };

  return (
    <div className="w-full flex flex-row items-start justify-between md:gap-2 mt-0 md:mt-5">
      <div className="img mr-2 mt-2 min-w-[18px] max-w-[18px] h-[18px] md:min-w-[40px] md:max-w-[40px] md:h-[40px] overflow-hidden ">
        <Link to={commentData?.authorChannelUrl}>
          {data && commentData && (
            <img
              src={commentData?.authorProfileImageUrl}
              alt={`Profile of ${commentData?.author}`}
              className="w-full h-full rounded-full"
              onError={(e) => (e.target.src = user)}
              loading="lazy"
            />
          )}
        </Link>
      </div>
      <div className="details flex-flex-col flex-1 ">
        <span className="text-[#0f0f0f] font-medium text-[7px] md:text-[14px]">
          {commentData?.author}
        </span>
        <span className="text-[#848484] text-[6px] md:text-[12px] ml-2 font-normal">
          {moment(commentData?.publishedAt).fromNow()}
        </span>
        <p className="text-[6px] md:text-sm">
          {decodeHtmlEntities(commentData?.text)}
        </p>
        <div className="like-dislike mt-[3px] md:mt-2 flex flex-row gap-1 items-center">
          <img src={like3} alt="like" className="w-2 h-2 md:w-4 md:h-4" />
          <span className="text-[#848484]  text-[6px] md:text-sm">
            {commentData?.likeCount}
          </span>
          <img
            src={dislike3}
            alt="dislike"
            className="w-2 h-2 md:w-4 md:h-4 ml-1 md:ml-2"
          />
          <span className="ml-2 md:ml-4 text-[#0f0f0f] text-[6px] md:text-[12px] font-medium cursor-pointer">
            Reply
          </span>
        </div>
      </div>
      <div>
        <img src={verticaldots} alt="dots" className="mt-1 w-3 md:w-7" />
      </div>
    </div>
  );
};

export default Comment;
