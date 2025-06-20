"use client";

import Tasks from "@/components/Tasks";
import Filter from "../components/Filter";
import { useEffect, useState, useContext } from "react";
import TaskContext from "@/context/TaskContext";
import Loading from "@/components/Loading";

export default function Home() {
  const [todoTasks, setTodoTask] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const { tasks, setTasks, theme } = useContext(TaskContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!tasks?.length) {
      setLoading(true);
      fetch(`/api/task/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            alert("Server Error: Sorry we could not get tasks");
          }
        })
        .then((data) => setTasks(data))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const todo = tasks?.filter(
      (value) => value?.tasks?.filter((v) => v?.done)?.length === 0
    );
    setTodoTask(todo);
    const progress = tasks?.filter(
      (value) =>
        value?.tasks?.length > value?.tasks?.filter((v) => v?.done)?.length &&
        value?.tasks?.filter((v) => v?.done)?.length
    );
    setInProgress(progress);
    setDone(
      tasks?.filter(
        (value) =>
          value?.tasks?.length === value?.tasks?.filter((v) => v?.done)?.length
      )
    );
  }, [tasks]);

  return (
    <>
      <Loading loading={loading} />
      <div className={`${
              theme === "light" ? "bg-[#ffffff]" : "bg-[#292b31]"
            }`}>
        <Filter />
        <div className="flex justify-between w-full p-[10px]">
          <Tasks tasks={todoTasks} cat={"todo"} />
          <Tasks tasks={inProgress} cat={"In progress"} />
          <Tasks tasks={done} cat={"done"} />
        </div>
      </div>
    </>
  );
}
