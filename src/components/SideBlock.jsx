import React from 'react';
import "../css/sideBlock.css";
import mainBlock from "../images/main-block-icon.svg";
import secondBlock from "../images/second-block-icon.svg";
import depositsBlock from "../images/deposits-block-icon.svg";
import fourthBlock from "../images/fourth-block-icon.svg";

const SideBlock = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-item-wrap">
        <div className="side-bar-item">
          <img src={mainBlock} alt="" />
          <span className="side-bar-item-name">Account Dashboard</span>
        </div>
        <div className="side-bar-item">
          <img src={secondBlock} alt="" />
          <span className="side-bar-item-name">Account History</span>
        </div>
        <div className="side-bar-item side-bar-item--selected">
          <img src={depositsBlock} alt="" />
          <span className="side-bar-item-name">Deposits</span>
        </div>
        <div className="side-bar-item">
          <img src={fourthBlock} alt="" />
          <span className="side-bar-item-name">Withdrawals</span>
        </div>
      </div>
    </div>
  );
};

export default SideBlock;
