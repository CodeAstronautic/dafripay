import React from "react";
import "./Sec6.css";

export default function Sec1() {
  return (
    <div className="sec6-container">
      <div className="sec6-l">
        <p>LET'S DO THIS</p>
        <p>Fill up the form and we'll <br /> get in touch within <br /> few hours</p>
      </div>
      <div className="sec6-r">
          <div className="s6-card">
              <h3 style={{margin:'0 0 20px 0', fontWeight:'500'}}>Hi, we're DafriPay! And you?</h3>
              <input type="text" placeholder="Full Name" className="s6-input" /><br />
              <input type="text" placeholder="E-mail" className="s6-input" /><br />
              <input type="text" placeholder="123 3456 789" className="s6-input" />
              <div className='s16-btn'>Submit</div>
          </div>
      </div>
    </div>
  );
}
