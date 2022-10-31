import React from 'react';
import { TopNavbar } from "../../Navbar";
import {
  CreditCard,
  Star,
  Document,
  Inflow,
  Info,
  Payment,
  PayIn,
  Exchange,
  ChevronDown,
  ArrowUp,
} from "../../Svg";
import './style.css';
import usa from '../../../assets/images/usa.png';
import eu from '../../../assets/images/eu.png';
import uk from '../../../assets/images/uk.png';

const WALLET_TABS = [
  {
    index: 1,
    tabName: 'Active',
    tabQty: 3,
    accounts: [
      {
        accoutName: 'EUR Wallet',
        currency: 'EUR',
        currencyImg: eu,
        amount: '2,000,000.50',
        isDefault: true,
      },
      {
        accoutName: 'Personal Account',
        currency: 'USD',
        currencyImg: usa,
        amount: '2,000,000.50',
        isDefault: false,
      },
      {
        accoutName: 'School Account',
        currency: 'GBP',
        currencyImg: uk,
        amount: '2,000,000.50',
        isDefault: false,
      },
    ]
  },
  {
    index: 2,
    tabName: 'Inactive',
    tabQty: 2,
    accounts: [],
  },
  {
    index: 3,
    tabName: 'Closed',
    tabQty: 0,
    accounts: [],
  },
];

const ScreenTwo = () => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const [activityIndex, setActivityIndex] = React.useState(2);

  const toggleTab = (index) => setActiveIndex(index);
  const toggleActivityTab = (index) => setActivityIndex(index);
  return (
    <div className="screen">
      <TopNavbar title="Wallet" />
      <div className="screen__content">
        <div className="screen__top">
          <h1 className="title">Your Wallet (s)</h1>
          <button className="btn__primary p-1">Create new wallet</button>
        </div>
        <div className="wallet__transaction">
          <div className="wallets">
            <div className="wallet__search">
              <div className="search__field">
                <span></span>
                <input type="text" className="search__input" placeholder="Search" />
              </div>
              <button type="button" className="btn__plain center">
                <span>All</span>
                <span>
                  <ChevronDown strokecolor="#017189" />
                </span>
              </button>
            </div>

            <div className="wallet__tabs">
              <div className="tabs">
                {WALLET_TABS.map(({ tabName, tabQty, index }) => (
                  <button
                    key={index}
                    className={`tab ${activeIndex === index && 'active'}`}
                    onClick={() => toggleTab(index)}
                    >
                    {`${tabName}(${tabQty})`}
                  </button>
                ))}
              </div>
              <div className="tab__container">
                {WALLET_TABS.map((wallet) => (
                  <div
                    className={`tab__content ${activeIndex ===  wallet.index && "active-content"}`}
                    key={wallet.index}
                  >
                    {wallet.accounts.length > 0 ? wallet.accounts.map((account) => (
                      <div className="wallet__card" key={account.accoutName}>
                        <div className="left__card-content">
                          <img src={account.currencyImg} alt="eu" />
                          <div className="left__content">
                            <h3>{account.accoutName}</h3>
                            <span>{account.currency}</span>
                          </div>
                        </div>
                        <div className="right__content">
                          <h3>${account.amount}</h3>
                          <span>{account.isDefault && 'Default'}</span>
                        </div>
                      </div>
                    )): (<h6>{`${wallet.tabName} Cards`}</h6>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="wallet__details">
            <div className="wallet__details-top">
              <div className="info">
                <div className="wallet__status">
                  <span className="status__indicator"></span>
                  <span className="status__indicator-text">Active</span>
                </div>
                <p className="wallet__name">EUR Wallet</p>
                <p className="wallet__symbol">EUR</p>
              </div>
              <span className="wallet__total">
                $2,000,000.50
              </span>
            </div>

            <div className="wallet__breakdown">
              <div className="breakdown">
                <span className="breakdown__title">Ledger Balance</span>
                <span className="breakdown__amount">$2,000,000.50</span>
              </div>
              <div className="breakdown">
                <span className="breakdown__title">Total Incomming</span>
                <span className="breakdown__amount">$2,000,000.50</span>
              </div>
              <div className="breakdown">
                <span className="breakdown__title">Blocked Balance</span>
                <span className="breakdown__amount">$0.00</span>
              </div>
              <div className="breakdown">
                <span className="breakdown__title">Total Outgoing</span>
                <span className="breakdown__amount">$5,000,000.50</span>
              </div>
            </div>

            <div className="wallet__options">
              <button type="button" className="btn__option">
                <span className="btn__option-icon"><Payment strokecolor="#017189" /></span>
                <span className="btn__option-text">Payment</span>
              </button>
              <button type="button" className="btn__option">
                <span className="btn__option-icon"><PayIn /></span>
                <span className="btn__option-text">Pay In</span>
              </button>
              <button type="button" className="btn__option">
                <span className="btn__option-icon"><Exchange /></span>
                <span className="btn__option-text">Exchange</span>
              </button>
            </div>

            <div className="more__options">
              <div className="action">
                <button type="button" className="btn__plain center">
                  <span>More options</span>
                  <span className="btn__plain-icon">
                    <ChevronDown strokecolor="#017189" />
                  </span>
                </button>
              </div>
              <ul className="option__list">
                <li className="option__item">
                  <button className="option__btn">
                    <span className="option__btn-icon">
                      <Star strokecolor="#017189" />
                    </span>
                    <span className="option__btn-text">Remove as Default Wallet</span>
                  </button>
                </li>
                <li className="option__item">
                  <button className="option__btn">
                    <span className="option__btn-icon">
                      <CreditCard strokecolor="#017189" />
                    </span>
                    <span className="option__btn-text">View Linked Cards</span>
                  </button>
                </li>
                <li className="option__item">
                  <button className="option__btn">
                    <span className="option__btn-icon">
                      <Document />
                    </span>
                    <span className="option__btn-text">Statement</span>
                  </button>
                </li>
                <li className="option__item">
                  <button className="option__btn">
                    <span className="option__btn-icon">
                      <Inflow strokecolor="#017189" />
                    </span>
                    <span className="option__btn-text">Inflow Details</span>
                  </button>
                </li>
                <li className="option__item">
                  <button className="option__btn">
                    <span className="option__btn-icon">
                      <Info strokecolor="#017189" />
                    </span>
                    <span className="option__btn-text">Wallet Information</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bottom">
              <div className="bottom__tabs">
                <button className={`tab ${activityIndex === 1 && 'active'}`} onClick={() => toggleActivityTab(1)}>Activity</button>
                <button className={`tab ${activityIndex === 2 && 'active'}`} onClick={() => toggleActivityTab(2)}>Transactions</button>
                <button className={`tab ${activityIndex === 3 && 'active'}`} onClick={() => toggleActivityTab(3)}>Invoices</button>
              </div>
              <div className="history">
                <span className="date">22 Jul, 2022</span>
                <button type="button" className="btn__plain">All</button>
              </div>
              <div className="bottom__tab-container">
                <div className={`bottom__tab-content ${activityIndex === 1 ? "active-content" : ""}`}>
                  <h6>Activity</h6>
                </div>
                <div className={`bottom__tab-content ${activityIndex === 2 ? "active-content" : ""}`}>
                  <div className="row">
                    <span className='row__icon'>
                      <ArrowUp />
                    </span>
                    <div className="row__text">
                      <span>Pay In-Voucher</span>
                      <span>EUR Wallet</span>
                    </div>
                    <span className="row__amount">$750.57</span>
                  </div>
                </div>
                <div className={`bottom__tab-content ${activityIndex === 3 ? "active-content" : ""}`}>
                  <h6>Invoices</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ScreenTwo;
