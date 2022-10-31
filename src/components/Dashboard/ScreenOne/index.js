import React from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { TopNavbar } from "../../Navbar";
import usa from '../../../assets/images/usa.png';
import wallet_action from '../../../assets/images/wallet_action.png';
import voucher from '../../../assets/images/voucher.png';
import card_action from '../../../assets/images/card_action.png';
import balance from '../../../assets/images/balance.png';
import payment from '../../../assets/images/payment.png';
import transfer from '../../../assets/images/transfer.png';
import { Plus } from "../../Svg";
import './style.css';
import data from '../../../constants/data';
import { options } from "../../../constants/options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const QUICK_ACTIONS = [
  { icon: wallet_action, text: 'Add new wallet'},
  { icon: card_action, text: 'Add new card'},
  { icon: balance, text: 'Balance exchange'},
  { icon: transfer, text: 'Transfer to account'},
  { icon: voucher, text: 'Generate voucher'},
  { icon: payment, text: 'Payment link'},
]

const ScreenOne = () => {
  return (
    <div className="screen">
      <TopNavbar title="Welcome, Huss Smith" />
      <div className="screen__content">
        <div className="screen__top">
          <h1 className="title">Wallet</h1>
        </div>
        <div className="cards">
          <div className="account__container">
            <ul className="account__list">
              {Array.from([0, 1]).map((x) => (
                <li className="account__item" key={x}>
                  <div className="account__card">
                    <div className="card__top">
                      <div className="card__top__left">
                        <h4 className="type">Personal account</h4>
                        <span className="currency">USD</span>
                      </div>
                      <div className="card__top__right">
                        <img src={usa} alt="usa" />
                      </div>
                    </div>
                    <div className="card__bottom">
                      <span className="amount">$10,250.00</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="btn__outline">
              <span>
                <Plus strokecolor="#017189" />
              </span>
            </button>
          </div>
        </div>
        <div className="quick__links">
          <h2 className="title">Quick links</h2>
          <h4 className="subtitle">Our frequently used actions for easy access.</h4>
          <ul className="action__list">
            {QUICK_ACTIONS.map((action) => (
              <li className="action__item" key={action.text}>
                <button type="button" className="btn__action">
                  <img src={action.icon} alt={action.text} />
                  <span className="action__text">{action.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="transaction">
          <div className="transaction__top">
            <h2 className="title">Activity</h2>
            <div className="right">
              <button type="button" className="btn__plain">Month</button>
              <button type="button" className="btn__plain">View Transaction History</button>
            </div>
          </div>
          <div className="chart">
            <Line
              datasetIdKey='id'
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenOne;
