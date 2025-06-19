import React from "react";
import { RiLoader4Line } from "react-icons/ri";

function Loading({ loading }) {
  
  return (
    <>
      {loading && (
        <section className="z-50 h-screen w-screen flex justify-center fixed top-0 left-0 items-center bg-[#00000080]">
          <div className="flex items-center justify-center bg-[#ffffff] h-[70px] w-[70px] rounded-[15px]">
            <RiLoader4Line size={35} color="black" className="load" />
          </div>
        </section>
      )}
    </>
  );
}

export default Loading;
