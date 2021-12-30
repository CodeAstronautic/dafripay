import React from 'react';
import { BsChatLeftText, BsBagCheck, BsBarChart, BsFillCpuFill } from "react-icons/bs";
// import BiChip from 'react-icons/bs';
import './Sec2.css';

export default function Sec1() {
    return (
        <div className="sec2-container">
           <p>DAFRIPAY</p>
           <p>Powerful . Easy . Free</p>
           <div className="s2-card-parent">
               <div className="s2-card">
                   <div className="logo-parent">
                       <BsChatLeftText/>
                   </div>
                   <div className="s2-label">Chat</div>
                   <div className="s2-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </div>
               </div>
               <div className="s2-card">
                   <div className="logo-parent">
                       <BsBagCheck/>
                   </div>
                   <div className="s2-label">Order</div>
                   <div className="s2-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </div>
               </div>
               <div className="s2-card">
                   <div className="logo-parent">
                       <BsFillCpuFill/>
                   </div>
                   <div className="s2-label">Digitize</div>
                   <div className="s2-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </div>
               </div>
               <div className="s2-card">
                   <div className="logo-parent">
                       <BsBarChart/>
                   </div>
                   <div className="s2-label">Report</div>
                   <div className="s2-text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   </div>
               </div>
           </div>
        </div>
    )
}
