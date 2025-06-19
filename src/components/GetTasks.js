"use client";
import React, { useContext, useState, useEffect } from "react";
import Loading from "./Loading";
import TaskContext from "@/context/TaskContext";

function GetTask() {
  
  return (
    <>
      <Loading loading={loading} />
    </>
  );
}

export default GetTask;
