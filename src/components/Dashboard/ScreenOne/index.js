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

import { Plus } from "../../Svg";
import './style.css';
import data from '../../../constants/data';
import { options } from "../../../constants/options";
import accounts  from '../../../constants/accounts';
import { quickLinks } from "../../../constants/links";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);
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
              {accounts.map((account) => (
                <li className="account__item" key={account.id}>
                  <div className="account__card">
                    <div className="card__top">
                      <div className="card__top__left">
                        <h4 className="type">{account.name}</h4>
                        <span className="currency">{account.currency}</span>
                      </div>
                      <div className="card__top__right">
                        <img src={account.img} alt={account.currency} />
                      </div>
                    </div>
                    <div className="card__bottom">
                      <span className="amount">${account.balance}</span>
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
            {quickLinks.map((link) => (
              <li className="action__item" key={link.id}>
                <button type="button" className="btn__action">
                  <img src={link.img} alt={link.title} />
                  <span className="action__text">{link.title}</span>
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
