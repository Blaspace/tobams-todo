"use client";
import React from "react";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { CiCalendar, CiDark, CiGrid41, CiLight } from "react-icons/ci";
import { MdInsertChart } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaRegMap } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import TaskContext from "@/context/TaskContext";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const [togle, setToggle] = React.useState(false);
  const {theme, setTheme} = React.useContext(TaskContext);
  const icons = [
    CiGrid41,
    FiUser,
    CiCalendar,
    MdInsertChart,
    IoCloudUploadOutline,
    FaRegMap,
    HiOutlineAdjustmentsHorizontal,
  ];

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);
  return (
    <div className="flex h-screen w-[20%] text-[#ffffff] shadow-[5px 5px 25px rgba(0,0,0,0.5)] ]">
      <div className="bg-[#2a2b2f] w-[80px] flex center items-center gap-[20px] pt-[20px] flex-col">
        <Image
          src="/Ovals.png"
          alt="Sidebar Image"
          objectFit="contain"
          width={20}
          height={20}
        />
        <Image
          src="/Logo.png"
          alt="Sidebar Image"
          objectFit="contain"
          width={20}
          height={20}
        />
        <ul className="flex flex-col gap-[20]">
          {icons.map((Icon) => {
            return <Icon className="text-[20px] " key={Icon} />;
          })}
        </ul>
      </div>
      <section
        className={`bg-[#ffffff] w-[${
          togle ? "0" : "80%"
        }] transition-all flex flex-col justify-between duration-500 text-[#2a2b2f] p-[20px] w-full`}
      >
        <div>
          <section className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Projects</h1>{" "}
            <FaCirclePlus className="text-[20px] text-gray-300" />
          </section>
          <br />
          <div className="flex flex-col gap-1 font-[550] text-[14px] text-gray-500">
            <p className="flex justify-between ">
              Team <IoIosArrowForward color="black" />
            </p>
            <p className="flex justify-between ">
              Projects <IoIosArrowForward color="black" />
            </p>
            <p className="flex justify-between ">
              Tasks <IoIosArrowForward color="black" />
            </p>
            <p className="flex justify-between ">
              Reminder <IoIosArrowForward color="black" />
            </p>
            <p className="flex justify-between ">
              Managers <IoIosArrowForward color="black" />
            </p>
          </div>
        </div>
        <div className="w-full flex justify-around p-[3px] items-center rounded-2xl bg-gray-100">
          <span
            className={`w-[50%] h-[30px] ${
              theme === "light" && "bg-[#ffffff]"
            }  rounded-2xl flex justify-center text-[14px] items-center cursor-pointer shadow-2xl`}
            onClick={() => {
              localStorage.setItem("theme", "light");
              setTheme("light");
            }}
          >
            <CiLight /> Light
          </span>
          <span
            className={`w-[50%] h-[30px]  ${
              theme === "dark" && "bg-[#000]"
            } rounded-2xl flex justify-center text-[14px] items-center cursor-pointer shadow-2xl`}
            onClick={() => {
              localStorage.setItem("theme", "dark");
              setTheme("dark");
            }}
          >
            <CiDark /> Dark
          </span>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
