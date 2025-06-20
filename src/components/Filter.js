import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { CiGrid2H } from "react-icons/ci";
import TaskContext from "@/context/TaskContext";

function Filter() {
  const { theme } = React.useContext(TaskContext);
  return (
    <div
      className={`${
        theme === "light" ? "bg-[#ffffff]" : "bg-[#292b31]"
      } w-full flex items-center justify-between border-b ${
        theme === "light" ? "border-gray-300" : "border-gray-600"
      }`}
    >
      <div className="flex gap-[20px] items-center text-[14px]">
        <p className="text-gray-500 pb-[10px] flex gap-[5]">
          <CiGrid2H size={20} />
          Board view
        </p>
        <p className="text-[grey] pb-[10px] flex items-center gap-[5px]">
          <FaCirclePlus className="text-[16px] text-gray-300" /> Add view
        </p>
      </div>
      <div className="flex gap-[25px] items-center text-14px">
        <p className="pb-[10px] text-[gray]">Filter</p>
        <p className="pb-[10px] text-[gray]">Sort</p>
        <HiOutlineDotsCircleHorizontal
          size={25}
          color="grey"
          className="mb-[10px]"
        />
        <a href="/newtask">
          <button
            className={`${
              theme === "light" ? "bg-[#222327]" : "bg-blue-700"
            } pt-[8px] pb-[8px] pr-[20px] pl-[20px] rounded-[20px] mb-[10px] text-[13px] text-[#ffffff]`}
          >
            New template
          </button>
        </a>
      </div>
    </div>
  );
}

export default Filter;
