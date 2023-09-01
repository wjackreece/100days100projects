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
      <div id="calendar" className="calendar">
        <div className="month">
          <h3>Month</h3>
          <div className="week-days-container">
            <div className="week-days">Sun</div>
            <div className="week-days">Mon</div>
            <div className="week-days">Tue</div>
            <div className="week-days">Wed</div>
            <div className="week-days">Thu</div>
            <div className="week-days">Fri</div>
            <div className="week-days">Sat</div>
          </div>
          <div className="days-container">
            <div className="days">
              <span className="cirle">30</span>
              <span className="cirle">31</span>
              <span className="cirle">1</span>
              <span className="cirle">2</span>
              <span className="cirle">3</span>
              <span className="cirle">4</span>
              <span className="cirle">5</span>
              <span className="cirle">6</span>
              <span className="cirle">7</span>
              <span className="cirle">8</span>
              <span className="cirle">9</span>
              <span className="cirle">10</span>
              <span className="cirle">11</span>
              <span className="cirle">12</span>
              <span className="cirle">13</span>
              <span className="cirle">14</span>
              <span className="cirle">15</span>
              <span className="cirle">16</span>
              <span className="cirle">17</span>
              <span className="cirle">18</span>
              <span className="cirle">19</span>
              <span className="cirle">20</span>
              <span className="cirle">21</span>
              <span className="cirle">22</span>
              <span className="cirle">23</span>
              <span className="cirle">24</span>
              <span className="cirle">25</span>
              <span className="cirle">26</span>
              <span className="cirle">27</span>
              <span className="cirle">28</span>
              <span className="cirle">29</span>
              <span className="cirle">30</span>
              <span className="cirle">31</span>
              <span className="cirle">1</span>
              <span className="cirle">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day002;
