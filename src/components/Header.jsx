import React, { useRef, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import cameron from "../assets/cameron.png";
import bell from "../assets/bell.png";
import upload2 from "../assets/upload2.png";
import microphone1 from "../assets/microphone1.png";
import { useGlobalContext } from "../Context";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { API_KEY } from "../constants/utils";
import axios from "axios";

const Header = () => {
  const { showSidebar, setShowSidebar, setCategory, setSearchResults } =
    useGlobalContext();
  const refContainer = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const [focus, setFocus] = useState(false);

  const handleSubmit = async (e, searchTerm) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&videoDuration=medium&maxResults=50&key=${API_KEY}`
      );

      const videoIds = data.items.map((item) => item.id.videoId).join(",");

      const { data: videoData } = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`
      );

      setSearchResults(videoData?.items);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showSidebar ? <Sidebar /> : ""}
      <div className="flex flex-row items-center justify-between px-1 md:px-3 lg:px-5 h-6 md:h-14 bg-white">
        <div className="flex flex-row items-center gap-1 md:gap-2 lg:gap-4 h-full">
          <div
            className=" hover:bg-[#e5e5e5] transition-all duration-300 p-1 md:p-2 rounded-full cursor-pointer"
            onClick={() => setShowSidebar(true)}
          >
            <SlMenu className="text-black text-xl w-[8px] ml-[0px] mr-[0px] md:w-6" />
          </div>
          <div className="cursor-pointer">
            <img
              src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
              alt="logo"
              className="w-8 md:w-24"
              onClick={() => {
                setCategory(24);
                navigate("/");
              }}
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <form
            className="group flex flex-row items-center h-4 md:h-14"
            onSubmit={(e) => handleSubmit(e, searchTerm)}
          >
            <div
              className={`h-4 md:h-10 flex flex-row items-center justify-center border rounded-l-full border-[#c6c6c6] border-r-transparent focus-within:border-blue-600 transition-all overflow-hidden  ${
                focus ? " pl-2 md:pl-4" : ""
              }`}
              ref={refContainer}
              onClick={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 100)}
            >
              {focus && (
                <CiSearch className="w-[10px] h-[10px] md:w-6 md:h-6" />
              )}
              <input
                type="text"
                className="h-full flex-1 text-[6px] md:text-lg bg-white outline-none px-2 md:px-4 w-[130px] sm:w-[150px] md:w-64 lg:w-96 xl:w-[500px] focus-within:border-blue-600 placeholder:text-[6px] md:placeholder:text-base placeholder:align-middle"
                placeholder="Search"
                style={{ lineHeight: "1rem" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              type="Submit"
              className="w-8 md:w-16 h-4 md:h-10 bg-[#f2f2f2] hover:bg-[#e4e4e4] transition-all duration-300 cursor-pointer flex items-center justify-center border rounded-r-full border-[#c6c6c6]"
            >
              <CiSearch className="w-[10px] h-[10px] md:w-6 md:h-6" />
            </button>
          </form>
          <div className="w-4 h-4 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#e4e4e4] rounded-full cursor-pointer transition-all duration-300 ">
            <img
              src={microphone1}
              alt="bell-icon"
              className="w-2 h-2 md:w-5 md:h-5"
            />
          </div>
        </div>
        <div className="flex flex-row items-center h-4 md:h-14 gap-1 md:gap-2 mr-2">
          <div className="w-4 h-4 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#e4e4e4] rounded-full cursor-pointer transition-all duration-300 ">
            <img
              src={upload2}
              alt="bell-icon"
              className="w-2 h-2 md:w-5 md:h-5"
            />
          </div>
          <div className="w-4 h-4 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#e4e4e4] rounded-full cursor-pointer transition-all duration-300 ">
            <img src={bell} alt="bell-icon" className="w-2 h-2 md:w-5 md:h-5" />
          </div>
          <div className="md:w-12 lg:w-16">
            <img
              src={cameron}
              alt="user"
              className="w-[10px] md:w-8 rounded-full md:ml-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
