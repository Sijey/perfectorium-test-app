import React, {useState} from 'react';
import "../css/deposits.css";
import "../css/sideBlock.css";
import right from "../images/right-arrow.svg";
import left from "../images/left-arrow.svg";

const Deposits = () => {
  const [state, setState] = useState([]);
  const [radio, setRadio] = useState();

  const submitData = (e) => {
    e.preventDefault();
    const newItem = {date: new Date(), type: radio, amount: "$" + e.target[0].value, email: e.target[1].value}
    setState([...state, newItem]);
  }

  return (
    <div className="deposits-block">
      {console.log(state)}
      <h2 className="block-header">Deposits</h2>
      <div className="block-wrap">
        <div className="data-block">
          <div className="block-tabs">
            <span className="block-tab block-tab--active">CHECK</span>
            <span className="block-tab">WIRE TRANSFER</span>
          </div>
          <form onSubmit={(e) => submitData(e)}>
          <div className="inputs-block">
            <div className="inputs-block-text">
              <div className="input-block">
                <span>Amount</span>
                <input className="amount-input" placeholder="1000" name="amount" />
              </div>
              <div className="input-block">
                <span>E-mail</span>
                <input className="email-input" placeholder="E-mail" name="email" />
              </div>
            </div>
            <div className="radio-inputs">
              <div className="radio-input">
                <input onChange={(e) => setRadio(e.target.value)} type="radio" name="type" value="Individual Account" id="type1" />
                <label className="radio-label" htmlFor="type1">Individual Account </label>
              </div>
              <div className="radio-input">
                <input onChange={(e) => setRadio(e.target.value)} type="radio" name="type" value="Joint Account" id="type2" />
                <label className="radio-label" htmlFor="type2">Joint Account</label>
              </div>
            </div>
          </div>
          <button className="block-button">Next</button>
          </form>
        </div>
        <div className="data-block">
          <div className="data-block-header">
            <span>Date</span>
            <span>Type</span>
            <span>Amount</span>
          </div>
          <div className="deposit-items">
            {state.map(item => (
              <div className="deposit-item" key={item.date}>
                <span className="deposit-item-row">{item.date.toLocaleDateString()}</span>
                <span className="deposit-item-row">{item.type}</span>
                <span>{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="pagination">
            <div className="pagination-button">
              <img src={left} alt="" />
              <span>Prev</span>
            </div>
            <div className="pagination-button">
              <span>Next</span>
              <img src={right} alt="" />
            </div>
            <span className="pagination-last-button">Last</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
