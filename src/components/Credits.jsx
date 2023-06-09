import React from "react";
import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className="center content-container">
      <h1>Credits</h1>
      <div>
        <h2>Alex</h2>
        <p>
          I put together the javascript for the main page, set up the react app
          and the json databBase, did a lil css tinkering.
        </p>
      </div>
      <div>
        <h2>Cole</h2>
        <p>
          I was Tasked Building the Signup, Login and Credits Pages as well as
          the CSS
        </p>
      </div>
      <div>
        <h2>Sav</h2>
        <p>
          I was tasked to create a header for the Login & Signup pages & create
          the flow in the Figma prototype.
        </p>
      </div>
      <div>
        <h2>P.S. Noman</h2>
        <p>
          Thanks Noman for introducing us to our Front-end development Career.
        </p>
        <br />
        <p>we wish you the best,</p>
        <p>sincerely,</p>
        <p>
          <em>Alex</em> <em>Cole</em> & <em>Sav</em>
        </p>
      </div>
    </div>
  );
}

export default Credits;
