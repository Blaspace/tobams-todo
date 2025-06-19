import React from "react";
import { CiBellOn, CiCalendar, CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <nav className="bg-[#ffffff] w-full h-[100px] flex items-center justify-between">
      <h2 className="font-bold text-[20px] text-[#2a2b2f]">Welcome Back, James</h2>
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
