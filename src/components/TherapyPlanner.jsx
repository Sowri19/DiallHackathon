import React from "react";
import Navbar from "./Navbar";
import Draggable from "react-draggable";

function TherapyPlanner() {
  return (
    <div>
      <Navbar />
      <h1>Therapy Planner</h1>
      <p>
        Write your thoughts and feelings here and click the button to get
        started with AI Therapy
      </p>
      <textarea id="therapyPlanner" rows="10" cols="50"></textarea>
      <button>AI Therapy Starter</button>
      <div>
        <h2>AI Therapy Response</h2>
        <p>Drag and Drop the points to change the order</p>
        <button>Save</button>
        <button>Clear</button>
        <ul>
          <li>
            {" "}
            <Draggable>
              <div className="">
                <h1>I can now be moved around 1!</h1>
              </div>
            </Draggable>
          </li>
          <li>
            <Draggable>
              <div className="">
                <h1>I can now be moved around 2!</h1>
              </div>
            </Draggable>
          </li>
          <li>
            <Draggable>
              <div className="">
                {/* This draggable component is an random image from any API on the internet please pick one. The IMage should be 30X60 px*/}
                <img src="https://via.placeholder.com/30x60" alt="random" />
              </div>
            </Draggable>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TherapyPlanner;
