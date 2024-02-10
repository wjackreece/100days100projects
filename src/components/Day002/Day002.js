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

      <p>Select mood:</p>
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
      <p>then click on the circles below</p>
    </div>
  );
}

export default Day002;
