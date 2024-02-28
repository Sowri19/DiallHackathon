import React from 'react'
// This Therapy Planner Component. This has a paragraph field on the left with a button that says "AI Therapy Starter" side and on the right side, on clicking the button, We send the form text to the Chaptgpt Ai and get a response from the API in the form of bullets, which we display on the right side of the screen.
// The bullet points should be as a draggable list and order should be changeable.
// The user should be able to add more bullet points to the list.
// The user should be able to save the list to the local storage.
// The user should be able to clear the list.
//The User should be able to mark the points and they should turn gray and be striked through.

function TherapyPlanner() {

     //The Therapy Responses sh
    
  return (

    <div>
        <h1>Therapy Planner</h1>
        <p>Write your thoughts and feelings here and click the button to get started with AI Therapy</p>
        <textarea id="therapyPlanner" rows="10" cols="50"></textarea>
        <button>AI Therapy Starter</button>
        <div>
            <h2>AI Therapy Response</h2>
            <p>Drag and Drop the points to change the order</p>
            <button>Save</button>
            <button>Clear</button>
            <ul>
            <li>AI Therapy Response 1</li>
            <li>AI Therapy Response 2</li>
            <li>AI Therapy Response 3</li>
            </ul>
        </div>
    </div>
  )
}


export default TherapyPlanner