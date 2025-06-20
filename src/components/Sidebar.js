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
import Link from "next/link";

function Sidebar() {
  const [togle, setToggle] = React.useState(false);
  const { theme, setTheme } = React.useContext(TaskContext);
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
    document.getElementsByTagName("body")[0].style.backgroundColor =
      theme === "light" ? "#ffffff" : "#292b31";

    document.getElementsByTagName("body")[0].style.color =
      theme !== "light" ? "#ffffff" : "#292b31";
    setTheme(savedTheme);
  }, [theme]);
  return (
    <div className="flex h-screen w-[20%] text-[#ffffff] shadow-2xl ]">
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
        className={`${theme === "light" ? "bg-[#ffffff]" : "bg-[#222327]"} ${
          togle ? "w-[0]" : "w-[80%]"
        } transition-all flex flex-col justify-between duration-500 text-[#2a2b2f] p-[20px] w-full`}
      >
        <div
          className={`${
            theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
          }`}
        >
          <section className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-bold">Projects</h1>{" "}
            <FaCirclePlus className="text-[20px] " />
          </section>
          <br />
          <br />
          <div className="flex flex-col gap-1 font-[550] text-[14px] text-gray-500">
            <Link href={"/"}>
              <p className="flex justify-between ">
                Tasks{" "}
                <IoIosArrowForward
                  color={`${
                    theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
                  }`}
                />
              </p>
            </Link>
            {/*<p className="flex justify-between ">
              Team {" "}
              <IoIosArrowForward
                color={`${
                  theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
                }`}
              />
            </p>
            <p className="flex justify-between ">
              Projects{" "}
              <IoIosArrowForward
                color={`${
                  theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
                }`}
              />
            </p>
            <p className="flex justify-between ">
              Reminder{" "}
              <IoIosArrowForward
                color={`${
                  theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
                }`}
              />
            </p>
            <p className="flex justify-between ">
              Managers{" "}
              <IoIosArrowForward
                color={`${
                  theme !== "light" ? "text-[#ffffff]" : "text-[#24262c]"
                }`}
              />
            </p>*/}
          </div>
        </div>
        <div
          className={`w-full flex justify-around p-[3px] items-center rounded-2xl  ${
            theme === "light"
              ? "bg-gray-100 text-[#000]"
              : "bg-[#292b31] text-[#ffffff]"
          } `}
        >
          <span
            className={`w-[50%] h-[30px] ${
              theme === "light" && "bg-[#ffffff] text-[#000]"
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
              theme === "dark" && "bg-[#000] text-[#ffffff]"
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
