import React from "react";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";

const SidebarNavItem = ({ key, link }) => {
  const { setCategory } = useGlobalContext();
  const navigate = useNavigate();

  const handleNavigateAndCategory = () => {
    setCategory(link.id);
    navigate("/");
  };
  return (
    <div
      key={key}
      className="flex flex-row items-center py-[3px] md:py-2 px-1 md:px-3 lg:px-4 gap-2 md:gap-5 lg:gap-7 rounded-xl hover:bg-[#e4e4e4] transition-all duration-300 cursor-pointer"
      onClick={handleNavigateAndCategory}
    >
      <img src={link.img} alt="icon" className="w-[9px] md:w-5" />
      <p className="text-[6px] md:text-sm font-normal">{link.name}</p>
    </div>
  );
};

export default SidebarNavItem;
