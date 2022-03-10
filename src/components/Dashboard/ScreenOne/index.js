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
import accounts  from '../../../constants/accounts';

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
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={wallet_action} alt="wallet" />
                <span className="action__text">Add new wallet</span>
              </button>
            </li>
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={card_action} alt="card" />
                <span className="action__text">Add new card</span>
              </button>
            </li>
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={balance} alt="balance" />
                <span className="action__text">Balance exchange</span>
              </button>
            </li>
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={transfer} alt="transfer" />
                <span className="action__text">Transfer to account</span>
              </button>
            </li>
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={voucher} alt="voucher" />
                <span className="action__text">Generate voucher</span>
              </button>
            </li>
            <li className="action__item">
              <button type="button" className="btn__action">
                <img src={payment} alt="payment" />
                <span className="action__text">Payment link</span>
              </button>
            </li>
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
