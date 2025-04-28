import React from "react";
import { useGlobalContext } from "../Context";
import { SlMenu } from "react-icons/sl";
import {
  exploreLinks,
  footerLinks,
  moreLinks,
  primaryLinks,
  settingsLinks,
} from "../constants/utils";
import SidebarNavItem from "./SidebarNavItem";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar, setShowSidebar, setCategory } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col w-[25%] md:w-[230px] lg:w-[240px] min-h-full max-h-screen overflow-y-scroll overflow-x-hidden scrollable z-50 fixed top-0 ${
        showSidebar ? "left-0" : "left-[100%]"
      } transition-all duration-1000 md:pt-2 md:pb-2 bg-white`}
    >
      <div className="flex flex-row items-center md:px-3 lg:px-5  md:gap-2 lg:gap-4 h-6 md:h-14">
        <div
          className=" hover:bg-[#e5e5e5] transition-all duration-300 p-2 rounded-full cursor-pointer"
          onClick={() => setShowSidebar(false)}
        >
          <SlMenu className="text-black text-xl ml-[0px] mr-[0px] w-[8px] md:w-6" />
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
      <div className="pt-2 md:pt-6 px-1 md:px-2 lg:px-3">
        {primaryLinks.map((link, index) => (
          <SidebarNavItem key={index} link={link} />
        ))}
        <hr className="my-2 md:my-4" />
      </div>
      {/* <div className="px-1 md:px-2 lg:px-3">
        <div className="flex flex-row items-center gap-1 md:gap-2 px-1 md:px-4">
          <p className="font-semibold text-[6px] md:text-[18px]">You</p>
          <img src={rightchevron} alt="right-chevron" className="w-2 md:w-4" />
        </div>
        <div className="pt-1 md:pt-3">
          {libraryLinks.map((link, index) => (
            <SidebarNavItem key={index} link={link} />
          ))}
        </div>

        <hr className="my-2 md:my-4" />
      </div> */}
      {/* <div className="px-1 md:px-2 lg:px-3">
        <div className="flex flex-row items-center gap-2 px-1 md:px-4">
          <p className="font-semibold text-[6px] md:text-[18px]">
            Subscriptions
          </p>
        </div>
        <div className="pt-1 md:pt-3">
          {subscriptionLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-row items-center py-1 md:py-2 px-1 md:px-4 gap-2 md:gap-7 rounded-xl hover:bg-[#e4e4e4] transition-all duration-300 cursor-pointer"
            >
              <img
                src={link.img}
                alt="icon"
                className="w-[9px] md:w-5 rounded-full"
              />
              <p className="text-[6px] md:text-sm font-normal">{link.name}</p>
            </div>
          ))}
        </div>

        <hr className="my-2 md:my-4" />
      </div> */}
      <div className="px-1 md:px-2 lg:px-3">
        <div className="flex flex-row items-center gap-2 px-1 md:px-4">
          <p className="font-semibold text-[6px] md:text-[18px]">Explore</p>
        </div>
        <div className="pt-1 md:pt-3">
          {exploreLinks.map((link, index) => (
            <SidebarNavItem key={index} link={link} />
          ))}
        </div>

        <hr className="my-2 md:my-4" />
      </div>
      <div className="px-1 md:px-2 lg:px-3">
        <div className="flex flex-row items-center gap-2 px-1 md:px-4">
          <p className="font-semibold text-[6px] md:text-[18px]">
            More from YouTube
          </p>
        </div>
        <div className="pt-1 md:pt-3">
          {moreLinks.map((link, index) => (
            <SidebarNavItem key={index} link={link} />
          ))}
        </div>

        <hr className="my-2 md:my-4" />
      </div>
      <div className="px-1 md:px-2 lg:px-3">
        <div className="pt-1 md:pt-3">
          {settingsLinks.map((link, index) => (
            <SidebarNavItem key={index} link={link} />
          ))}
        </div>

        <hr className="my-2 md:my-4" />
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="px-2 md:px-6 flex flex-row flex-wrap">
          {footerLinks.slice(0, 7).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="mr-[4px] md:mr-[7px] text-[5px] md:text-[13px] font-semibold text-[#6d6c6c]"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="px-2 md:px-6 flex flex-row flex-wrap">
          {footerLinks.slice(7).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className=" mr-[4px] md:mr-[7px] text-[5px] md:text-[13px] font-semibold text-[#6d6c6c]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="px-2 md:px-6 py-2 md:py-5">
        <p className="text-[#909090] text-[6px] md:text-[10px]">
          © 2025 Google LLC
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
