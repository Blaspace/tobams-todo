"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function Page() {
  
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState(task?.tasks || []);
  const [tasktext, setTasktext] = useState("");
  const taskInput = useRef();
  const router = useRouter();
  const params = useParams();

  const handlePush = (e) => {
    e.target.style.background = "grey";
    e.target.innerText = "Loading...";
    e.target.disabled = true;
    fetch(`/api/task/add`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tasks,
        title,
        dateDue: dueDate,
        createdBy: "James Ngbede",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        router.push("/");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.style.background = "#2a2b2f";
        e.target.innerText = "Submit";
        e.target.disabled = false;
      });
  };

  useEffect(() => {
    fetch(`/api/task/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setTask(json)
        setTasks(json.tasks || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddTask = () => {
    if (tasktext.length) {
      let newTask = [
        {
          done: false,
          task: tasktext,
        },
        ...tasks,
      ];
      setTasks(newTask);
      taskInput.current.value = "";
      setTasktext("");
    }
  };

  const handleRemoveTask = (e) => {
    const newTask = tasks.filter((value) => value.task !== e.task);
    setTasks(newTask);
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <div
        className="w-[80%] flex flex-col justify-center gap-[10px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-[20px] font-bold">Add New Task</h1>
        <br />
        <div className="flex justify-between w-full">
          <section className="flex flex-col gap-[15px] w-[48%]">
            <div>
              <h2 className="font-bold">Task Title</h2>
              <h2>{task?.title}</h2>
              <p className="text-gray-500">{task?.createdBy}</p>
            </div>
            <div>
              <h2 className="font-bold">Date Added</h2>
              <h2>{task?.dateAdded.slice(0, 10)}</h2>
            </div>
            <div>
              <h2 className="font-bold">Due Date</h2>
              <h2>{task?.dateDue}</h2>
            </div>
            <button
              onClick={(e) => handlePush(e)}
              className="w-[200px] h-[40px] self-start border-[#2a2b2f] text-[#ffffff] bg-[#2a2b2f] font-[500] rounded-2xl"
            >
              Submit
            </button>
          </section>
          <section className="flex flex-col gap-[15px] w-[48%]">
            <label className="font-bold">List Your Task Todos</label>
            <div className="h-[40px] border-1 border-[lightgray] rounded-[8px] w-full flex justify-between">
              <input
                type="text"
                placeholder="Enter Tasks"
                className="h-full w-[80%] p-[5px]"
                onChange={(e) => setTasktext(e.target.value)}
                ref={taskInput}
              />
              <button
                onClick={handleAddTask}
                className="h-full w-[20%] text-[#ffffff] bg-[#2a2b2f] rounded-br-[8px] rounded-tr-[8px]"
              >
                Add
              </button>
            </div>
            <div className="flex flex-col gap-[10px] bg-gray-100 p-[5px] max-h-[500px] o">
              {tasks?.map((value) => {
                return (
                  <section
                    key={value}
                    className="flex justify-between p-[10px] w-full items-center h-[50px] bg-[#ffffff] rounded-[8px] border-1 border-[lightgray]"
                  >
                    <span className="flex gap-[10px]">
                      <input type="checkbox" onChange={(e) => handleCheck(value)} checked={value.done} />
                      <p>{value.task}</p>
                    </span>
                    <p
                      className="text-red-700 text-3xl cursor-pointer"
                      onClick={() => handleRemoveTask(value)}
                    >
                      &times;
                    </p>
                  </section>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Page;
