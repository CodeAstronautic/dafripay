import React from 'react';
import img4 from '../../images/img4.png';
import './Sec5.css';
import { BsHandIndexThumb } from "react-icons/bs";
import { RiHealthBookLine, RiHeartLine } from "react-icons/ri";

export default function Sec5() {
    return (
        <div className="sec5-container">
            <div className="sec5-r">
            <p>ARE YOU READY?</p>
           <p>Here's how to get started</p>
            <div className="s5-card">
                   <div className="logo-parent">
                       <BsHandIndexThumb/>
                   </div>
                   <div className='s5-card-textpart'>
                   <div className="s5-label">Get In Touch</div>
                   <div className="s5-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       </div>
                   </div>
               </div>
            <div className="s5-card">
                   <div className="logo-parent">
                       <RiHealthBookLine/>
                   </div>
                   <div className='s5-card-textpart'>
                   <div className="s5-label">Connect To Your Suppliers</div>
                   <div className="s5-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       </div>
                   </div>
               </div>
            <div className="s5-card">
                   <div className="logo-parent">
                       <RiHeartLine/>
                   </div>
                   <div className='s5-card-textpart'>
                   <div className="s5-label">Onboard In a Heartbeat</div>
                   <div className="s5-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       </div>
                   </div>
               </div>
            </div>
            
            <div className="sec5-l">
                <img src={img4} alt="" />
            </div>
        </div>
    )
}
