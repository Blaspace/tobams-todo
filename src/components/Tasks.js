"use client";
import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import TaskDropdown from "./TaskDropdown";
import TaskContext from "@/context/TaskContext";

function Tasks({ tasks, cat }) {
  const { theme } = React.useContext(TaskContext);
  const [dropId, setDropId] = React.useState(null);

  const route = useRouter();

  return (
    <div
      className={` ${
        theme === "light" ? "bg-[#ffffff]" : "bg-[#24262c]"
      } flex p-[10px] flex-col w-[32.5%] mt-[10px] gap-[10px] rounded-[10px] border-dashed border-2  ${
        theme === "light" ? "border-gray-100" : "border-gray-600"
      }`}
    >
      <div className="flex justify-between text-gray-400 text-[14px]">
        <p>{`${cat} (${tasks?.length})`}</p>

        <a href="/newtask">
          <p className="flex gap-0.5 items-center text-gray-400 cursor-pointer">
            <FaCirclePlus className="text-gray-400" /> Add new task
          </p>
        </a>
      </div>
      {tasks?.map((value) => {
        const doneTask = value?.tasks?.filter((v) => v?.done)?.length;
        console.log(dropId?.id === value.id);

        return (
          <div
            className={`border-1 p-[15px] ${
              theme === "light" ? "bg-[#ffffff]" : "bg-[#292b31]"
            }  rounded-[10px] w-full relative ${
              theme === "light" ? "border-gray-200" : "border-[#292b31]"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2
                className={`font-bold text-[#2a2b2f] ${
                  theme === "light" ? "text-[#2a2b2f]" : "text-[#ffffff]"
                }`}
              >
                {value?.title}
              </h2>
              <HiOutlineDotsCircleHorizontal
                size={25}
                color="grey"
                className="mb-[10px]"
                onClick={() => setDropId(value)}
              />
              <TaskDropdown
                drop={value?.id === dropId?.id}
                setDrop={setDropId}
                id={value?.id}
              />
            </div>
            <p className="text-[14px] text-gray-500">{value?.createdBy}</p>
            <section className="flex justify-between mt-[10px] text-[14px]">
              <p className="text-gray-500 font-[550]">Progress</p>
              <p className="text-gray-500 font-[550]">
                {value?.tasks?.filter((v) => v?.done).length}/
                {value?.tasks?.length}
              </p>
            </section>
            <input
              type="range"
              min="0"
              max={value?.tasks?.length}
              value={doneTask}
              className={`style-range ${
                theme === "light"
                  ? "bg-[#ffffff] border-gray-200"
                  : "bg-[#292b31] border-gray-600"
              } w-full h-[8px] rounded-2xl border cursor-pointer appearance-none`}
              style={{
                background: `linear-gradient(to right, ${
                  cat === "done" ? "green" : "orange"
                } 0%, ${cat === "done" ? "green" : "orange"} ${
                  (doneTask * 100) / value?.tasks?.length
                }%,  ${theme === "light" ? "#ffffff" : "#292b31"} ${
                  (doneTask * 100) / value?.tasks?.length
                }%, ${theme === "light" ? "#ffffff" : "#292b31"} 100%)`,
              }}
            />
            <div>
              <p
                className={`p-[3px] flex justify-center mt-[10px]  ${
                  cat === "done"
                    ? theme === "light"
                      ? "bg-gray-100 "
                      : "bg-gray-600"
                    : theme === "light"
                    ? "bg-red-100 "
                    : "bg-gray-600"
                } text-[14px] ${
                  cat !== "done" && theme === "light"
                    ? "text-red-600 "
                    : "bg-gray-700"
                }  w-[40%] rounded-2xl`}
              >
                {value?.dateDue}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tasks;
