"use client";
import React from "react";

function DeleteBox({ id, setId }) {
  const handleDelete = (e) => {
    e.target.style.background = "grey";
    e.target.innerText = "Loading...";
    e.target.disabled = true;
    fetch(`/api/task/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setId(null);
          window.location.reload();
        } else {
          alert("Error deleting task");
        }
      })
      .catch((err) => console.error("Error:", err))
      .finally(() => {
        e.target.style.background = "red";
        e.target.innerText = "Delete";
        e.target.disabled = false;
      });
  };
  return (
    id && (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-[20px] font-bold text-[#2a2b2f]">Delete Task</h2>
          <p className="text-gray-500 text-[14px]">
            Are you sure you want to delete this task? This action cannot be
            undone.
          </p>
          <div
            onClick={(e) => handleDelete(e)}
            className="flex gap-[10px] mt-[10px]"
          >
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
              Delete
            </button>
            <button
              onClick={() => setId(null)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteBox;
