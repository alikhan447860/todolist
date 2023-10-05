"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };
  const delethandler = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  let rendertask = <h2>No Task Available </h2>;
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className=" flex item-center justify-between mb-8 ">
          <div className="justify-between flex mb-5 w-2/3">
            <h5 className="font-semibold text-2xl ">{t.title}</h5>
            <h6 className="font-semibold text-lg">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              delethandler(i);
            }}
            className="bg-red-500 rounded text-white font-semibold px-4 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <div>
      <>
        <h1 className="bg-black text-white font-bold text-center text-5xl p-5">
          3CR's Todolist
        </h1>
        <form onSubmit={submithandler}>
          <input
            type="text"
            className="border-4 border-zinc-800 px-4 py-2 m-8 text-2xl"
            placeholder="Enter Your task"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-4 border-zinc-800 px-4 text-2xl py-2 m-8"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="bg-black text-white rounded px-4 py-3 m-5 text-2xl font-bold">
            Add Task
          </button>
        </form>
        <hr />
        <div className="p-8 bg-slate-200">
          {" "}
          <ul>{rendertask}</ul>
        </div>
      </>
    </div>
  );
};

export default page;
