"use client"

import TaskContext from "@/context/TaskContext";
import React from "react";
import { CiBellOn, CiCalendar, CiSearch } from "react-icons/ci";

function Nav() {
  const {theme} = React.useContext(TaskContext)
  return (
    <nav className={` ${theme === "light" ? "bg-[#ffffff]" : "bg-[#292b31]"} w-full h-[100px] flex items-center justify-between`}>
      <h2 className="font-bold text-[20px] text-[#ffffff]">Welcome Back, James</h2>
      <div className="flex gap-2 items-center">
        <CiSearch size={25}/>
        <CiBellOn size={25}/>
        <CiCalendar size={25}/>
        <p className="text-[grey]">19 may 2022</p>
      </div>
    </nav>
  );
}

export default Nav;
