import React from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { FaCirclePlus } from "react-icons/fa6";
import {useRouter} from "next/navigation"

function Tasks({ tasks, cat }) {
 const route = useRouter()
  return (
    <div className="flex p-[10px] flex-col w-[32.5%] mt-[10px] gap-[10px] rounded-[10px] border-dashed border-2 border-gray-100">
      <div className="flex justify-between text-gray-400 text-[14px]">
        <p>
          {`${cat} (${tasks?.length})`}
        </p>

        <a href="/newtask">
          <p className="flex gap-0.5 items-center text-[#2a2b2f] cursor-pointer">
            <FaCirclePlus className="text-gray-400" /> Add new task
          </p>
        </a>
      </div>
      {tasks?.map((value) => {
        const doneTask = value?.tasks?.filter((v) => v?.done)?.length;
        return (
          <div className="border-1 p-[15px] border-gray-200 rounded-[10px] w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[#2a2b2f]">{value?.title}</h2>
              <HiOutlineDotsCircleHorizontal
                size={25}
                color="grey"
                className="mb-[10px]"
              />
            </div>
            <p className="text-[14px] text-gray-500">{value?.createdBy}</p>
            <section className="flex justify-between mt-[10px] text-[14px]">
              <p className="text-gray-500 font-[550]">Progress</p>
              <p>
                {value?.tasks?.filter((v) => v?.done).length}/{value?.tasks?.length}
              </p>
            </section>
            <input
              type="range"
              min="0"
              max={value?.tasks?.length}
              value={doneTask}
              className="style-range bg-gray-100 w-full h-[8px] rounded-2xl border border-gray-200 cursor-pointer appearance-none"
              style={{
                background: `linear-gradient(to right, ${
                  cat === "done" ? "green" : "orange"
                } 0%, ${cat === "done" ? "green" : "orange"} ${
                  (doneTask * 100) / value?.tasks?.length
                }%, #ffffff ${
                  (doneTask * 100) / value?.tasks?.length
                }%, #ffffff 100%)`,
              }}
            />
            <div>
              <p
                className={`p-[3px] flex justify-center mt-[10px]  ${
                  cat === "done" ? "bg-gray-100" : "bg-red-100"
                } text-[14px] ${
                  cat !== "done" && "text-red-600"
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
