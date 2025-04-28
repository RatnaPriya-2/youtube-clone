import React from "react";
import { primaryLinks } from "../constants/utils";
import { useGlobalContext } from "../Context";

const ShortSidebar = () => {
  const { setCategory, showSidebar } = useGlobalContext();

  return (
    <div className="flex flex-col gap-2 md:gap-6 mt-2 md:mt-4 lg:mt-6 px-[3px] md:px-[22px] lg:px-1">
      {primaryLinks.map((link, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col items-center lg:py-4 gap-1 md:gap-2 rounded-xl hover:bg-[#e4e4e4] transition-all duration-300 cursor-pointer w-[20px] ${
              showSidebar ? "lg:w-[225px]" : "lg:w-[70px]"
            }`}
            onClick={() => setCategory(link.id)}
          >
            <img src={link.img} alt="icon" className="w-[9px] md:w-5" />
            <p className="md:text-[10px] text-[4px] font-normal">{link.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShortSidebar;
