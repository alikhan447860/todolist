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
  let rendertask = <h2>No Task Available </h2>;
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li>
          <div className="justify-between flex mb-5">
            <h5 className="font-semibold text-2xl ">{t.title}</h5>
            <h6 className="font-semibold text-xl">{t.desc}</h6>
          </div>
        </li>
      );
    });
  }
  return (
    <div>
      <>
        <h1 className="bg-black text-white font-bold text-center text-5xl p-5">
          Ali's Todolist
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
