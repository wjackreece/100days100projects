import React from "react";
import {
  TbMoodSmile,
  TbMoodEmpty,
  TbMoodHappy,
  TbMoodSad,
  TbMoodNeutral,
} from "react-icons/tb";

import "./Day002.css";

function Day002() {
  return (
    <div>
      <h1> 2023 Mood Calendar</h1>
      <h2>~ color each day depending on what your mood was / is ~</h2>

      <h3>Select mood:</h3>
      <div>
        <button>
          <TbMoodHappy />
        </button>
        <button>
          <TbMoodSmile />
        </button>
        <button>
          <TbMoodEmpty />
        </button>{" "}
        <button>
          <TbMoodSad />
        </button>
        <button>
          <TbMoodNeutral />
        </button>
      </div>
    </div>
  );
}

export default Day002;
