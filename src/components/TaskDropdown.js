"use client";
import React from "react";
import Link from "next/link";
import DeleteBox from "./DeleteBox";

function TaskDropdown({ drop, setDrop, id }) {
  const [deleteId, setDeleteId] = React.useState(null);
  return (
    <>
      <DeleteBox id={deleteId} setId={setDeleteId} />
      <div
        className={`${
          drop ? "h-[150px]" : "h-[0]"
        } w-[80%] overflow-hidden transition-all duration-500 ease-in-out bg-[#ffffff] absolute top-[0] right-[0] shadow-lg`}
      >
        <div className="relative flex flex-col gap-[5px]">
          <span
            onClick={() => setDrop(null)}
            className="absolute top-[0px] right-[5px] cursor-pointer text-[30px]"
          >
            &times;
          </span>
          <p className="mt-[10px]">
            <Link href={`/task/${id}`} className="p-4 mt-[10px] text-[14px]">
              View Task
            </Link>
          </p>
          <p>
            <Link href={`/task/${id}`} className="p-4 text-[14px]">
              Update Task
            </Link>
          </p>
          <p onClick={() => setDeleteId(id)} className="p-4 text-[14px] text-[red] cursor-pointer">
            Delete Task
          </p>
        </div>
      </div>
    </>
  );
}

export default TaskDropdown;
